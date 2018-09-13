package myservices.suppliers

import models.supplier.Supplier

import scala.concurrent.Future

trait SuppliersService {

  def getAll(): Future[Seq[Supplier]]


  def save(supplier: Supplier): Future[Supplier]

}
