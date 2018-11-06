package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class MaterialStrengths(
                              _id: Option[BSONObjectID],
                              code: Int,
                              description: String
                            )

object MaterialStrengths {

  implicit object MaterialStrengthsReaders extends Reads[MaterialStrengths] {

    def reads(json: JsValue): JsResult[MaterialStrengths] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val description = (obj \ "description").as[String]


        JsSuccess(MaterialStrengths(_id, code, description))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object MaterialStrengthsWriter extends OWrites[MaterialStrengths] {
    def writes(materialStrengths: MaterialStrengths): JsObject = Json.obj(
      "_id" -> materialStrengths._id,
      "code" -> materialStrengths.code,
      "description" -> materialStrengths.description
    )
  }

}
