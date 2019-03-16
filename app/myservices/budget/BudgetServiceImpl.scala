package myservices.budget

import java.util.concurrent.{Executors, ThreadPoolExecutor}

import db.dao.boxes.types.BoxesTypesDAO
import forms.BudgetForm
import javax.inject.Inject
import models.formula.Formula
import myservices.formula.FormulaService
import net.objecthunter.exp4j.ExpressionBuilder
import play.api.libs.json.Json
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.{ExecutionContext, Future}


class BudgetServiceImpl @Inject()(
                                   implicit ec: ExecutionContext,
                                   boxesTypesDAO: BoxesTypesDAO,
                                   formulaService: FormulaService
                                 ) extends BudgetService {


  def computeArea(budgetForm: BudgetForm): Future[Unit] = {

    getFormula(budgetForm.boxTypeId, budgetForm.typeId)
      .map {
        case Some(formula) => {
          println(formula.formula)
          Future[Option[Double]] = Future {
            evaluateFormula(formula.formula, budgetForm.large,
              budgetForm.width, budgetForm.depth)
          }.map{ area =>
            println(area)
          }
        }
        case None => print("asdasdasdasdasdasdad")
      }
  }

  def getFormula(boxTypeId: BSONObjectID,
                 typeId: BSONObjectID): Future[Option[Formula]] = {

    val query = BSONDocument(
      BSONDocument("boxTypeId" -> boxTypeId),
      BSONDocument("typeId" -> typeId)
    )
    formulaService.getOne(query)
  }

  def evaluateFormula(formula: String, large: Double,
                      width: Double, depth: Double): Option[Double] = {

    val area = new ExpressionBuilder(formula)
      .variables("L", "W", "D").build()
      .setVariable("L", large)
      .setVariable("W", width)
      .setVariable("D", depth)
      .evaluate()
    println("area", area)
    Some(area)
  }

  def getPrices(totalArea: Double, factorId: BSONObjectID, cantidad: Int): Future[Seq[Double]] = ???
}
