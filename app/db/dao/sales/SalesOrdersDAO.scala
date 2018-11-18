package db.dao.sales

import models.sale.SaleOrder

import scala.concurrent.Future

trait SalesOrdersDAO {

  def save(saleOrder: SaleOrder): Future[SaleOrder]
}
