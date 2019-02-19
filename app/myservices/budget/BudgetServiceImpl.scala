package myservices.budget

import db.dao.boxes.types.BoxesTypesDAO
import javax.inject.Inject
import net.objecthunter.exp4j.ExpressionBuilder
import play.api.libs.json.Json
import reactivemongo.bson.BSONObjectID

import scala.concurrent.{ExecutionContext, Future}


class BudgetServiceImpl @Inject()(
                                   implicit ec: ExecutionContext,
                                   boxesTypesDAO: BoxesTypesDAO
                                 ) extends BudgetService {

  def computeArea(boxTypeId: BSONObjectID, large: Double,
                  width: Double, deep: Double): Future[Double] = {

    val query = Json.obj("_id" -> boxTypeId.toString())
    boxesTypesDAO.getOne(query).map {
      case Some(boxType) =>
        val e = new ExpressionBuilder(boxType.formula)
          .variables("L", "W", "D").build()
          .setVariable("L", large)
          .setVariable("W", width)
          .setVariable("D", deep)

        e.evaluate()

    }

  }

  def getPrices(totalArea: Double, factorId: BSONObjectID, cantidad: Int): Future[Seq[Double]] = ???
}
