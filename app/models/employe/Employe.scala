package models.employe

import java.util.{Date, UUID}

import models.area.Area
import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Employe(
                    _id: Option[BSONObjectID],
                    userId: UUID,
                    areaId: BSONObjectID,
                    names: String,
                    lastName: String,
                    fullName: Option[String],
                    birthdate: Date,
                    sex: String,
                    mobile: String,
                    active: Boolean
                  )

object Employe {

  implicit val employeFormat: OFormat[Employe] = Json.format[Employe]

}
