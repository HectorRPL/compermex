package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Paperboard(
                       _id: Option[BSONObjectID],
                       code: Int,
                       description: Option[String],
                       typeId: Option[BSONObjectID],
                       strengthId: Option[BSONObjectID],
                       colorId: Option[BSONObjectID]
                     )

object Paperboard {

  implicit val paperboardFormat: OFormat[Paperboard] = Json.format[Paperboard]

}