package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class MaterialColor (
                    _id: Option[BSONObjectID],
                    code: String,
                    description: String
                    )

object MaterialColor {

  implicit object BoxTypeReaders extends Reads[MaterialColor]{

    def reads(json: JsValue): JsResult[MaterialColor] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[String]
        val description = (obj \ "description").as[String]


        JsSuccess(MaterialColor(_id, code, description))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object MaterialColorWriter extends OWrites[MaterialColor] {
    def writes(materialColor: MaterialColor): JsObject = Json.obj(
      "_id" -> materialColor._id,
      "code" -> materialColor.code,
      "description" -> materialColor.description
    )
  }

}