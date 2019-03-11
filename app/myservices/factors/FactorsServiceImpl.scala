package myservices.factors

import javax.inject.Inject
import db.dao.factors.FactorsDAO
import models.Pagination
import models.factor.Factor
import play.api.libs.json.{JsObject, Json}
import reactivemongo.bson.BSONObjectID

import scala.concurrent.{ExecutionContext, Future}

class FactorsServiceImpl @Inject()(
                                    implicit ec: ExecutionContext,
                                    factorsDAO: FactorsDAO
                                  ) extends FactorsService {
  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Factor]] = {
    factorsDAO.getList(query, sort, pag)
  }

  def count(query: JsObject): Future[Int] = {
    factorsDAO.count(query)
  }

  def save(paperboard: Factor): Future[Factor] = {
    factorsDAO.save(paperboard)
  }

  def getOne(_id: BSONObjectID): Future[Option[Factor]] = {
    val query = Json.obj("_id" -> Json.obj("$oid" -> _id.stringify))
    factorsDAO.getOne(query)
  }

  def getOne(boxTypeId: BSONObjectID,
             typeId: BSONObjectID,
             strengthId: BSONObjectID): Future[Option[Factor]] = {

    val query = Json.obj(
      "boxTypeId" -> Json.obj("$oid" -> boxTypeId.stringify),
      "typeId" -> Json.obj("$oid" -> typeId.stringify),
      "strengthId" -> Json.obj("$oid" -> strengthId.stringify)
    )

    factorsDAO.getOne(query)
  }
}
