package myservices.sales

import db.dao.sales.SalesOrdersDAO
import javax.inject.Inject
import models.Pagination
import models.sale.SaleOrder
import play.api.libs.json.JsObject

import scala.concurrent.{ExecutionContext, Future}


class SalesServiceImpl  @Inject()(
                                   implicit ec: ExecutionContext,
                                   salesOrdersDAO: SalesOrdersDAO
                                 ) extends SalesService {

  def save(saleOrder: SaleOrder): Future[SaleOrder] = {
    salesOrdersDAO.save(saleOrder)
  }

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[SaleOrder]] = {
    salesOrdersDAO.getList(query, sort, pag)
  }
}
