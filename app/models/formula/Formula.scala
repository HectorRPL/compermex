package models.formula

import play.api.libs.json.{Json, OFormat}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Formula (
                   _id: Option[BSONObjectID],
                   boxTypeId:BSONObjectID,
                   typeId: BSONObjectID,
                   formula: String
                   )
object Formula {

  implicit val formulaFormat: OFormat[Formula] = Json.format[Formula]

}
