package models.box

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Box(
                _id: Option[BSONObjectID],
                code: String,
                description: String,
                large: Double,
                width: Double,
                high: Double,
                companyId: Option[BSONObjectID],
                paperboardId: BSONObjectID,
                clientId: Option[BSONObjectID],
                variationPositive: Int,
                variationNegative: Int,
                sellerPrice: Double,
                observations: Option[String],
                boxTypeId: BSONObjectID,
                quality: Boolean,
                plane: Boolean,
                size: String,
                unitCost: Double
              )

object Box {

  implicit object BoxsReaders extends Reads[Box] {

    def reads(json: JsValue): JsResult[Box] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[String]
        val description = (obj \ "description").as[String]
        val large = (obj \ "large").as[Double]
        val width = (obj \ "width").as[Double]
        val high = (obj \ "high").as[Double]
        val companyId = (obj \ "companyId").asOpt[BSONObjectID]
        val paperboardId = (obj \ "paperboardId").as[BSONObjectID]
        val clientId = (obj \ "clientId").asOpt[BSONObjectID]
        val variationPositive = (obj \ "variationPositive").as[Int]
        val variationNegative = (obj \ "variationNegative").as[Int]
        val sellerPrice = (obj \ "sellerPrice").as[Double]
        val observations = (obj \ "observations").asOpt[String]
        val boxTypeId = (obj \ "boxTypeId").as[BSONObjectID]
        val quality = (obj \ "quality").as[Boolean]
        val plane = (obj \ "plane").as[Boolean]
        val size = (obj \ "size").as[String]
        val unitCost = (obj \ "unitCost").as[Double]


        JsSuccess(Box(_id, code, description, large, width, high,  companyId, paperboardId, clientId, variationPositive,
          variationNegative, sellerPrice, observations, boxTypeId, quality, plane, size, unitCost))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }


  implicit object BoxWriter extends OWrites[Box] {
    def writes(box: Box): JsObject = Json.obj(
      "_id" -> box._id,
      "code" -> box.code,
      "description" -> box.description,
      "large" -> box.large,
      "width" -> box.width,
      "high" -> box.high,
      "companyId" -> box.companyId,
      "paperboardId" -> box.paperboardId,
      "clientId" -> box.clientId,
      "variationPositive" -> box.variationPositive,
      "variationNegative" -> box.variationNegative,
      "sellerPrice" -> box.sellerPrice,
      "observations" -> box.observations,
      "boxTypeId" -> box.boxTypeId,
      "quality" -> box.quality,
      "plane" -> box.plane,
      "size" -> box.size,
      "unitCost" -> box.unitCost,
    )
  }

}