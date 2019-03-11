package myservices.factors

import models.Pagination
import models.factor.Factor
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait FactorsService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Factor]]

  def count(query: JsObject): Future[Int]

  def save(factor: Factor): Future[Factor]

  def getOne(_id: BSONObjectID): Future[Option[Factor]]

  def getOne(boxTypeId: BSONObjectID, typeId: BSONObjectID, strengthId: BSONObjectID): Future[Option[Factor]]

}
