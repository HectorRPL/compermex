package db.dao.factors

import models.Pagination
import models.factor.Factor
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait FactorsDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Factor]]

  def count(query: JsObject): Future[Int]

  def getOne(_id: BSONObjectID): Future[Option[Factor]]

  def save(paperboard: Factor): Future[Factor]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: JsObject): Future[Unit]

}
