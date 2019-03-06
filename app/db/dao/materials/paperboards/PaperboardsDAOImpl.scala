package db.dao.materials.paperboards

import javax.inject.Inject
import models.Pagination
import models.material.Paperboard
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection
import reactivemongo.play.json.collection.JSONBatchCommands.AggregationFramework.{Lookup, Match, UnwindField, Skip, Limit}

import scala.concurrent.{ExecutionContext, Future}

class PaperboardsDAOImpl @Inject()(
                                    implicit ec: ExecutionContext,
                                    val reactiveMongoApi: ReactiveMongoApi
                                  ) extends PaperboardsDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("paperboards"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Paperboard]] = {


    collection.flatMap(_.aggregatorContext[Paperboard](
      Match(query),
      List(
        Skip(pag.skip), // <-- skip some states if offset > 0
        Limit(pag.limit),
        Lookup("colors", "colorId", "_id", "color"),
        Lookup("strengths", "strengthId", "_id", "strength"),
        Lookup("types", "typeId", "_id", "typeMaterial"),
        UnwindField("color"),
        UnwindField("strength"),
        UnwindField("typeMaterial")
      )
    ).prepared.cursor
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Paperboard]]()))

  }

  def count(query: JsObject): Future[Int] = {
    collection.flatMap(_.count(Some(query)))
  }

  def getOne(_id: BSONObjectID): Future[Option[Paperboard]] = {
    val query = BSONDocument("_id" -> _id)
    collection.flatMap(_.find(query).one[Paperboard])
  }

  def save(paperboard: Paperboard): Future[Paperboard] = {
    val doc = paperboard.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???

}
