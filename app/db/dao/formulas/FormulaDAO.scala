package db.dao.formulas

import models.Pagination
import models.formula.Formula
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONDocument

import scala.concurrent.Future

trait FormulaDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Formula]]

  def getOne(query: BSONDocument): Future[Option[Formula]]

}
