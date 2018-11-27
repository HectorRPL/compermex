package db.dao.areas

import models.Pagination
import models.area.Area
import play.api.libs.json.JsObject
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.Future

trait AreasDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Area]]

  def getOne(query: BSONDocument): Future[Option[Area]]
}
