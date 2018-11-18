package myservices.sales

import db.dao.sales.SalesOrdersDAO
import javax.inject.Inject
import models.sale.SaleOrder

import scala.concurrent.{ExecutionContext, Future}


class SalesServiceImpl  @Inject()(
                                   implicit ec: ExecutionContext,
                                   salesOrdersDAO: SalesOrdersDAO
                                 ) extends SalesService {

  def save(saleOrder: SaleOrder): Future[SaleOrder] = {
    salesOrdersDAO.save(saleOrder)
  }
}
