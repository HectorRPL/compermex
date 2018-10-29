package myservices.zipCodes

import models.Pagination
import models.zipCode.ZipCode
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait ZipCodesService {

  def getAll(query: Option[JsObject], sort: Option[JsObject],
             pag: Pagination): Future[Seq[ZipCode]]

  def save(zipCode: ZipCode): Future[ZipCode]
}
