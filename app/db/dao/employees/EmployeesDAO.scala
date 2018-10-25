package db.dao.employees

import models.employe.Employe
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait EmployeesDAO {

  def all(): Future[Seq[Employe]]

  def one(id: BSONObjectID): Future[Option[Employe]]

  def save(zipCode: Employe): Future[Employe]

  def remove(): Future[Unit]

  def update(): Future[Unit]
}
