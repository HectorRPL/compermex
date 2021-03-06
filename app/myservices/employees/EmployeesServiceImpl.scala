package myservices.employees

import db.dao.employees.EmployeesDAO
import javax.inject.Inject
import models.Pagination
import models.employe.{Employe, EmployeInfo}
import play.api.libs.json.{JsObject, Json}
import reactivemongo.bson.BSONDocument

import scala.concurrent.{ExecutionContext, Future}

class EmployeesServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      employeesDAO: EmployeesDAO
                                    ) extends EmployeesService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Employe]] = {

    employeesDAO.getList(query, sort, pag)
  }

  def save(employe: Employe): Future[Employe] = {
    employeesDAO.save(employe)
  }

  def getEmployeeByUserId(query: BSONDocument): Future[Option[Employe]] = {
    employeesDAO.getOne(query)
  }

  def getAllInfo(query: JsObject, sort: JsObject,
                 pag: Pagination): Future[Seq[EmployeInfo]] = {
    employeesDAO.getListInfo(query, sort, pag)
  }
}
