package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Paperboard(
                             _id: Option[BSONObjectID],
                             code: Int,
                             description: String,
                             materialTypeId: Option[BSONObjectID],
                             materialStrengthId: BSONObjectID,
                             materialColorId: BSONObjectID,
                             supplierId: BSONObjectID,
                             cost: Double

                           )

object Paperboard {

  implicit val paperboardFormat = Json.format[Paperboard]

}