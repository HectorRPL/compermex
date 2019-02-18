package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Color(
                _id: Option[BSONObjectID],
                code: Int,
                description: String
                )

object Color {

  implicit object BoxTypeReaders extends Reads[Color]{

    def reads(json: JsValue): JsResult[Color] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val description = (obj \ "description").as[String]

        JsSuccess(Color(_id, code, description))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object ColorWriter extends OWrites[Color] {
    def writes(color: Color): JsObject = Json.obj(
      "_id" -> color._id,
      "code" -> color.code,
      "description" -> color.description
    )
  }

}