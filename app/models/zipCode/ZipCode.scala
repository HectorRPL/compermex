package models.zipCode

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class ZipCode(
                    _id: Option[BSONObjectID],
                    code: String,
                    colony: String,
                    town: String,
                    state: String,
                    city: String,
                    stateCode: String
                  )

object ZipCode {

  implicit object ZipCodesReaders extends Reads[ZipCode] {

    def reads(json: JsValue): JsResult[ZipCode] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[String]
        val colony = (obj \ "colony").as[String]
        val town = (obj \ "town").as[String]
        val state = (obj \ "state").as[String]
        val city = (obj \ "city").as[String]
        val stateCode = (obj \ "stateCode").as[String]


        JsSuccess(ZipCode(_id, code, colony, town, state, city, stateCode))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }


  implicit object ZipCodesWriter extends OWrites[ZipCode] {
    def writes(zipCode: ZipCode): JsObject = Json.obj(
      "_id" -> zipCode._id,
      "code" -> zipCode.code,
      "colony" -> zipCode.colony,
      "town" -> zipCode.town,
      "state" -> zipCode.state,
      "city" -> zipCode.city,
      "stateCode" -> zipCode.stateCode
    )
  }

}