package forms

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class BudgetForm(
                       quantity: Int,
                       large: Double,
                       width: Double,
                       deep: Double,
                       boxTypeId: BSONObjectID,
                       paperboardId: BSONObjectID
                     )

object BudgetForm {

  implicit val budgetFormFormat: OFormat[BudgetForm] = Json.format[BudgetForm]

}


