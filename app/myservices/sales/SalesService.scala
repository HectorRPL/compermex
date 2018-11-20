package myservices.sales

import models.Pagination
import models.sale.SaleOrder
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait SalesService {

  def save(saleOrder: SaleOrder): Future[SaleOrder]

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[SaleOrder]]
}
