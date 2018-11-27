package myservices.zipCodes

import models.Pagination
import models.zipCode.ZipCode
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONDocument

import scala.concurrent.Future

trait ZipCodesService {

  def getAll(query: BSONDocument, sort: JsObject,
             pag: Pagination): Future[Seq[ZipCode]]

  def save(zipCode: ZipCode): Future[ZipCode]
}
