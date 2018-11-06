package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Paperboard(
                             _id: Option[BSONObjectID],
                             code: Int,
                             description: String,
                             materialTypeId: BSONObjectID,
                             materialStrengthId: BSONObjectID,
                             materialColorId: BSONObjectID,

                           )

object Paperboard {

  implicit object PaperboardReaders extends Reads[Paperboard] {

    def reads(json: JsValue): JsResult[Paperboard] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val description = (obj \ "strength").as[String]
        val materialTypeId = (obj \ "materialTypeId").as[BSONObjectID]
        val materialStrengthId = (obj \ "materialColorId").as[BSONObjectID]
        val materialColorId = (obj \ "materialColorId").as[BSONObjectID]


        JsSuccess(Paperboard(_id, code, description, materialTypeId,
          materialStrengthId, materialColorId))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object PaperboardWriter extends OWrites[Paperboard] {
    def writes(materialStrength: Paperboard): JsObject = Json.obj(
      "_id" -> materialStrength._id,
      "code" -> materialStrength.code,
      "description" -> materialStrength.description,
      "materialTypeId" -> materialStrength.materialTypeId,
      "materialStrengthId" -> materialStrength.materialStrengthId,
      "materialColorId" -> materialStrength.materialColorId
    )
  }

}