package myservices.sales

import models.sale.SaleOrder

import scala.concurrent.Future

trait SalesService {

  def save(saleOrder: SaleOrder): Future[SaleOrder]
}
