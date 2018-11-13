package db.dao.areas

import javax.inject.Inject
import models.Pagination
import models.area.Area
import play.api.libs.json.{JsObject, Json}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class AreasDAOImpl @Inject()(
                              val reactiveMongoApi: ReactiveMongoApi
                            ) extends AreasDAO{


  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("areas"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Area]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Area](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Area]]())
    )
  }

  def getOne(id: BSONObjectID): Future[Option[Area]] = {
    val query = BSONDocument("_id" -> id)
    collection.flatMap(_.find(query).one[Area])
  }
}
