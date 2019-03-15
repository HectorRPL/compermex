package myservices.formula

import models.formula.Formula
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.Future

trait FormulaService {

  def getOne(query: BSONDocument): Future[Option[Formula]]
}
