package myservices.formula
import db.dao.formulas.FormulaDAO
import javax.inject.Inject
import models.formula.Formula
import reactivemongo.bson.BSONDocument

import scala.concurrent.{ExecutionContext, Future}

class FormulaServiceImpl@Inject()(
                                   implicit ec: ExecutionContext,
                                   formulaDAO: FormulaDAO
                                 )  extends FormulaService {

  def getOne(query: BSONDocument): Future[Option[Formula]] = {
    formulaDAO.getOne(query)
  }
}
