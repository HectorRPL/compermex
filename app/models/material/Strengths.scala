package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Strengths(
                              _id: Option[BSONObjectID],
                              code: Int,
                              description: String
                            )

object Strengths {

  implicit object MaterialStrengthsReaders extends Reads[Strengths] {

    def reads(json: JsValue): JsResult[Strengths] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val description = (obj \ "description").as[String]


        JsSuccess(Strengths(_id, code, description))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object MaterialStrengthsWriter extends OWrites[Strengths] {
    def writes(materialStrengths: Strengths): JsObject = Json.obj(
      "_id" -> materialStrengths._id,
      "code" -> materialStrengths.code,
      "description" -> materialStrengths.description
    )
  }

}
