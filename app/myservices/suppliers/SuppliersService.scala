package myservices.suppliers

import models.Pagination
import models.supplier.Supplier
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait SuppliersService {

  def getAll(query: Option[JsObject], sort: Option[JsObject],
             pag: Pagination): Future[Seq[Supplier]]

  def save(supplier: Supplier): Future[Supplier]

}
