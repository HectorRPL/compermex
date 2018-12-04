package models.employe

import java.util.{Date}

import models.area.Area
import play.api.libs.json.{Json, OFormat}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class EmployeInfo (
                         _id: BSONObjectID,
                         fullName: String,
                         birthdate: Date,
                         sex: String,
                         mobile: String,
                         area: Option[Area]
                       )
object EmployeInfo {

  implicit val employeInfoFormat: OFormat[EmployeInfo] = Json.format[EmployeInfo]

}
