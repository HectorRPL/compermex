package myservices.employees


import models.Pagination
import models.employe.Employe
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait EmployeesService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Employe]]

  def save(employe: Employe): Future[Employe]
}
