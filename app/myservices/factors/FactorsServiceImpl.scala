package myservices.factors

import javax.inject.Inject

import db.dao.factors.FactorsDAO
import models.Pagination
import models.factor.Factor
import play.api.libs.json.JsObject
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
    factorsDAO.getOne(_id)
  }
}
