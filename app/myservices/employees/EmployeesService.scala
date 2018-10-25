package myservices.employees

import models.supplier.Supplier

import scala.concurrent.Future

trait EmployeesService {

  def getAll(): Future[Seq[Supplier]]

  def save(supplier: Supplier): Future[Supplier]
}
