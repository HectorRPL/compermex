package db.dao.factors

import javax.inject.Inject
import models.Pagination
import models.factor.Factor
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.Cursor
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json.collection.JSONCollection
import reactivemongo.play.json.collection.JSONBatchCommands.AggregationFramework.{Lookup, Match, UnwindField, Skip, Limit}

import scala.concurrent.{ExecutionContext, Future}

class FactorsDAOImpl @Inject()(
                                implicit ec: ExecutionContext,
                                val reactiveMongoApi: ReactiveMongoApi
                              ) extends FactorsDAO {
  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("factors"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Factor]] = {

    collection.flatMap(_.aggregatorContext[Factor](
      Match(query),
      List(
        Skip(pag.skip), // <-- skip some states if offset > 0
        Limit(pag.limit),
        Lookup("boxesTypes", "boxTypeId", "_id", "boxType"),
        Lookup("strengths", "strengthId", "_id", "strength"),
        Lookup("types", "typeId", "_id", "typeMaterial"),
        UnwindField("boxType"),
        UnwindField("strength"),
        UnwindField("typeMaterial")
      )
    ).prepared.cursor
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Factor]]()))

  }

  def count(query: JsObject): Future[Int] = {
    collection.flatMap(_.count(Some(query)))
  }

  def getOne(_id: BSONObjectID): Future[Option[Factor]] = {
    val query = BSONDocument("_id" -> _id)
    collection.flatMap(_.find(query).one[Factor])
  }

  def save(factor: Factor): Future[Factor] = {
    val doc = factor.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???

}