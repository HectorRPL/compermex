package myservices.employees

import db.dao.employees.EmployeesDAO
import javax.inject.Inject
import models.Pagination
import models.employe.Employe
import play.api.libs.json.Json

import scala.concurrent.{ExecutionContext, Future}

class EmployeesServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      employeesDAO: EmployeesDAO
                                    ) extends EmployeesService {

  def getAll(): Future[Seq[Employe]] = {
    val pag = Pagination(50, 1)
    val query = Json.obj()
    val sort = Json.obj()

    employeesDAO.getList(query, sort, pag)
  }

  def save(employe: Employe): Future[Employe] = {
    employeesDAO.save(employe)
  }

}
