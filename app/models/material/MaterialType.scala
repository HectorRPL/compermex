package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class MaterialType(
                  _id: Option[BSONObjectID],
                  code: Int,
                  description: String
                  )

object MaterialType {

  implicit object BoxTypeReaders extends Reads[MaterialType]{

    def reads(json: JsValue): JsResult[MaterialType] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val description = (obj \ "description").as[String]


        JsSuccess(MaterialType(_id, code, description))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object MaterialTypeWriter extends OWrites[MaterialType] {
    def writes(materialType: MaterialType): JsObject = Json.obj(
      "_id" -> materialType._id,
      "code" -> materialType.code,
      "description" -> materialType.description
    )
  }

}