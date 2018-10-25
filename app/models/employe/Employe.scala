package models.employe

import java.util.Date

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Employe (
                     _id: Option[BSONObjectID],
                     userId: String,
                     departamentId: BSONObjectID,
                     names: String,
                     lastNames: String,
                     fullName: Option[String],
                     birthDate: Date,
                     sex: String,
                     phone: Option[String],
                     mobil: String,
                     active: Boolean
                   )
object Employe {

  implicit object EmployesReaders extends Reads[Employe] {

    def reads(json: JsValue): JsResult[Employe] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val userId = (obj \ "userId").as[String]
        val departamentId = (obj \ "departamentId").as[BSONObjectID]
        val names = (obj \ "names").as[String]
        val lastNames = (obj \ "lastNames").as[String]
        val fullName = (obj \ "fullName").asOpt[String]
        val birthDate = (obj \ "birthDate").as[Date]
        val sex = (obj \ "sex").as[String]
        val phone = (obj \ "phone").asOpt[String]
        val mobil = (obj \ "mobil").as[String]
        val active = (obj \ "active").as[Boolean]


        JsSuccess(Employe(_id, userId, departamentId, names, lastNames,
          fullName, birthDate, sex, phone, mobil, active))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }


  implicit object EmployeWriter extends OWrites[Employe] {
    def writes(employe: Employe): JsObject = Json.obj(
      "_id" -> employe._id,
      "userId" -> employe.userId,
      "departamentId" -> employe.departamentId,
      "names" -> employe.names,
      "lastNames" -> employe.lastNames,
      "fullName" -> employe.lastNames,
      "birthDate" -> employe.birthDate,
      "sex" -> employe.sex,
      "phone" -> employe.phone,
      "mobil" -> employe.mobil,
      "active" -> employe.active
    )
  }

}
