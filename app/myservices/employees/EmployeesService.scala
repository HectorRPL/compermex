package myservices.employees


import models.employe.Employe

import scala.concurrent.Future

trait EmployeesService {

  def getAll(): Future[Seq[Employe]]

  def save(employe: Employe): Future[Employe]
}
