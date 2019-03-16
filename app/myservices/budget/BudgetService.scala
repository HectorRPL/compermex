package myservices.budget

import forms.BudgetForm
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait BudgetService {

  def computeArea(budgetForm: BudgetForm): Future[Unit]

  def getPrices(totalArea: Double, factorId: BSONObjectID, cantidad: Int): Future[Seq[Double]]

}
