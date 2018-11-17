package models.area

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Area(
                      _id: Option[BSONObjectID],
                      description: String
                      )

object Area {

  implicit val areaFormat = Json.format[Area]

}