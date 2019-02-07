package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Type(
                  _id: Option[BSONObjectID],
                  code: Int,
                  description: String
                  )

object Type {

  implicit object BoxTypeReaders extends Reads[Type]{

    def reads(json: JsValue): JsResult[Type] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val description = (obj \ "description").as[String]


        JsSuccess(Type(_id, code, description))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object MaterialTypeWriter extends OWrites[Type] {
    def writes(materialType: Type): JsObject = Json.obj(
      "_id" -> materialType._id,
      "code" -> materialType.code,
      "description" -> materialType.description
    )
  }

}