package db.dao.zipCodes

import models.Pagination
import models.zipCode.ZipCode
import play.api.libs.json.JsObject
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.Future

trait ZipCodesDAO {

  def getList(query: BSONDocument, sort: JsObject,
              pag: Pagination): Future[Seq[ZipCode]]

  def getOne(query: BSONDocument): Future[Option[ZipCode]]

  def save(zipCode: ZipCode): Future[ZipCode]

  def remove(query: BSONDocument): Future[Unit]

  def update(query: BSONDocument, data: BSONDocument): Future[Unit]

}
