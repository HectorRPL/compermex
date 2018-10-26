package db.dao.areas

import javax.inject.Inject
import models.Pagination
import models.area.Area
import play.api.libs.json.{JsObject, Json}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}

import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class AreasDAOImpl @Inject()(
                              val reactiveMongoApi: ReactiveMongoApi
                            ) extends AreasDAO{


  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("Areases"))

  def getList(query: Option[JsObject], sort: Option[JsObject],
              pag: Pagination): Future[Seq[Area]] = {
    val query = Json.obj()
    val sort = Json.obj()
    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Area](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Area]]())
    )
  }
}
