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

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class PaperboardsDAOImpl @Inject()(
                                    val reactiveMongoApi: ReactiveMongoApi
                                  )extends PaperboardsDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("paperboards"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Paperboard]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Paperboard](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Paperboard]]())
    )
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
