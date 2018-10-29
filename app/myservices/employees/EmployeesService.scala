package myservices.employees


import models.Pagination
import models.employe.Employe
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait EmployeesService {

  def getAll(query: Option[JsObject], sort: Option[JsObject],
             pag: Pagination): Future[Seq[Employe]]

  def save(employe: Employe): Future[Employe]
}
