package myservices.suppliers

import models.Pagination
import models.supplier.Supplier
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait SuppliersService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Supplier]]

  def save(supplier: Supplier): Future[Supplier]

}
