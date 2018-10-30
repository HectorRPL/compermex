package models.employe

import java.util.{Date, UUID}

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Employe (
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

  implicit object EmployesReaders extends Reads[Employe] {

    def reads(json: JsValue): JsResult[Employe] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val userId = (obj \ "userId").as[UUID]
        val areaId = (obj \ "areaId").as[BSONObjectID]
        val names = (obj \ "names").as[String]
        val lastName = (obj \ "lastName").as[String]
        val fullName = (obj \ "fullName").asOpt[String]
        val birthdate = (obj \ "birthdate").as[Date]
        val sex = (obj \ "sex").as[String]
        val mobile = (obj \ "mobile").as[String]
        val active = (obj \ "active").as[Boolean]


        JsSuccess(Employe(_id, userId, areaId, names, lastName,
          fullName, birthdate, sex, mobile, active))

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
      "areaId" -> employe.areaId,
      "names" -> employe.names,
      "lastName" -> employe.lastName,
      "fullName" -> employe.lastName,
      "birthdate" -> employe.birthdate,
      "sex" -> employe.sex,
      "mobile" -> employe.mobile,
      "active" -> employe.active
    )
  }

}
