package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Paperboard(
                             _id: Option[BSONObjectID],
                             code: Int,
                             description: String,
                             materialTypeId: Option[BSONObjectID],
                             materialStrengthId: BSONObjectID,
                             materialColorId: BSONObjectID,
                             cost: Double

                           )

object Paperboard {

  implicit object PaperboardReaders extends Reads[Paperboard] {

    def reads(json: JsValue): JsResult[Paperboard] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val description = (obj \ "description").as[String]
        val materialTypeId = (obj \ "materialTypeId").asOpt[BSONObjectID]
        val materialStrengthId = (obj \ "materialColorId").as[BSONObjectID]
        val materialColorId = (obj \ "materialColorId").as[BSONObjectID]
        val cost = (obj \ "cost").as[Double]


        JsSuccess(Paperboard(_id, code, description, materialTypeId,
          materialStrengthId, materialColorId, cost))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object PaperboardWriter extends OWrites[Paperboard] {
    def writes(paperboard: Paperboard): JsObject = Json.obj(
      "_id" -> paperboard._id,
      "code" -> paperboard.code,
      "description" -> paperboard.description,
      "materialTypeId" -> paperboard.materialTypeId,
      "materialStrengthId" -> paperboard.materialStrengthId,
      "materialColorId" -> paperboard.materialColorId,
      "cost" -> paperboard.cost,
    )
  }

}