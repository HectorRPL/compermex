package myservices.budget

import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait BudgetService {

  def computeArea(boxTypeId: BSONObjectID, large: Double,
                  width: Double, deep: Double): Future[Double]

  def getPrices(totalArea: Double, factorId: BSONObjectID, cantidad: Int): Future[Seq[Double]]

}
