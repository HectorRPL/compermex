package myservices.employees


import models.Pagination
import models.employe.{Employe, EmployeInfo}
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONDocument

import scala.concurrent.Future

trait EmployeesService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Employe]]

  def save(employe: Employe): Future[Employe]

  def getEmployeeByUserId(query: BSONDocument): Future[Option[Employe]]

  def getAllInfo(query: JsObject, sort: JsObject,
                 pag: Pagination) : Future[Seq[EmployeInfo]]
}
