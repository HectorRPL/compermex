package myservices.budget

import com.mohiva.play.silhouette.impl.exceptions.IdentityNotFoundException
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


  def computeArea(budgetForm: BudgetForm): Future[Option[Double]] = {

    getFormula(budgetForm.boxTypeId, budgetForm.typeId)
      .map {
        case Some(formula) => println(formula)

        /*val e = new ExpressionBuilder(formula.formula)
          .variables("L", "W", "D").build()
          .setVariable("L", budgetForm.large)
          .setVariable("W", budgetForm.width)
          .setVariable("D", budgetForm.depth)

        e.evaluate()*/
        Some(budgetForm.depth * budgetForm.large)
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

  def getPrices(totalArea: Double, factorId: BSONObjectID, cantidad: Int): Future[Seq[Double]] = ???
}
