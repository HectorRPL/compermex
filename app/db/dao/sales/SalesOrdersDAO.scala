package db.dao.sales

import models.Pagination
import models.sale.SaleOrder
import models.supplier.Supplier
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait SalesOrdersDAO {

  def save(saleOrder: SaleOrder): Future[SaleOrder]

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[SaleOrder]]
}
