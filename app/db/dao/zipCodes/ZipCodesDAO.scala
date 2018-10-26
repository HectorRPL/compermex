package db.dao.zipCodes

import models.Pagination
import models.zipCode.ZipCode
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait ZipCodesDAO {

  def getList(query: Option[JsObject], sort: Option[JsObject],
              pag: Pagination): Future[Seq[ZipCode]]

  def getOne(_id: BSONObjectID): Future[Option[ZipCode]]

  def save(zipCode: ZipCode): Future[ZipCode]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: Object): Future[Unit]

}
