package models.box

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class BoxType (
                     _id: Option[BSONObjectID],
                     code: String,
                     description: String
                   )

object BoxType {

  implicit object BoxTypeReaders extends Reads[BoxType]{

    def reads(json: JsValue): JsResult[BoxType] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[String]
        val description = (obj \ "description").as[String]

        JsSuccess(BoxType(_id, code, description))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object BoxTypeWriter extends OWrites[BoxType] {
    def writes(boxType: BoxType): JsObject = Json.obj(
      "_id" -> boxType._id,
      "code" -> boxType.code,
      "description" -> boxType.description,
    )
  }

}