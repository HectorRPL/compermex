package db.dao.boxes

import javax.inject.Inject
import models.Pagination
import models.box.Box
import play.api.libs.json.{JsObject, Json}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class BoxesDAOImpl @Inject()(
                              val reactiveMongoApi: ReactiveMongoApi
                            ) extends BoxesDAO {

  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("boxes"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Box]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Box](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Box]]())
    )
  }

  def getOne(_id: BSONObjectID): Future[Option[Box]] = {
    val query = BSONDocument("_id" -> _id)
    collection.flatMap(_.find(query).one[Box])
  }

  def save(box: Box): Future[Box] = {
    val doc = box.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???
}
