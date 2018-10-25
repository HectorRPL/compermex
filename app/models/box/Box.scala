package models.box

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Box(
                _id: Option[BSONObjectID],
                prov: String,
                description: String,
                large: Double,
                width: Double,
                high: Double,
                companyId: Option[BSONObjectID],
                materialId: Option[BSONObjectID],
                resistanceId: Option[BSONObjectID],
                clientId: Option[BSONObjectID]
              )

object Box {

  implicit object BoxsReaders extends Reads[Box] {

    def reads(json: JsValue): JsResult[Box] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val prov = (obj \ "prov").as[String]
        val description = (obj \ "description").as[String]
        val large = (obj \ "large").as[Double]
        val width = (obj \ "width").as[Double]
        val high = (obj \ "high").as[Double]
        val companyId = (obj \ "companyId").asOpt[BSONObjectID]
        val materialId = (obj \ "materialId").asOpt[BSONObjectID]
        val resistanceId = (obj \ "resistanceId").asOpt[BSONObjectID]
        val clientId = (obj \ "clientId").asOpt[BSONObjectID]


        JsSuccess(Box(_id, prov, description, large, width, high,
          companyId, materialId, resistanceId, clientId))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }


  implicit object BoxWriter extends OWrites[Box] {
    def writes(box: Box): JsObject = Json.obj(
      "_id" -> box._id,
      "prov" -> box.prov,
      "description" -> box.description,
      "large" -> box.large,
      "width" -> box.width,
      "high" -> box.high,
      "companyId" -> box.companyId,
      "materialId" -> box.materialId,
      "resistanceId" -> box.resistanceId,
      "clientId" -> box.clientId
    )
  }

}