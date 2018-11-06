package db.dao.companies

import models.Pagination
import models.company.Company
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait CompaniesDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Company]]

  def getOne(_id: BSONObjectID): Future[Option[Company]]

  def save(client: Company): Future[Company]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: JsObject): Future[Unit]

}
