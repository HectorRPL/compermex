package db.dao.employees

import models.Pagination
import models.employe.{Employe, EmployeInfo}
import play.api.libs.json.JsObject
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.Future


trait EmployeesDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Employe]]

  def getOne(query: BSONDocument): Future[Option[Employe]]

  def save(employe: Employe): Future[Employe]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: JsObject): Future[Unit]

  def getListInfo(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[EmployeInfo]]
}
