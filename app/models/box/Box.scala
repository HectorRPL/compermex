package models.box

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Box(
                _id: Option[BSONObjectID],
                code: String,
                large: Double,
                width: Double,
                high: Double,
                paperboardId: BSONObjectID,
                variationPositive: Int,
                variationNegative: Int,
                sellerPrice: Double,
                observations: Option[String],
                boxTypeId: BSONObjectID,
                quality: Boolean,
                plane: Boolean
              )

object Box {

  implicit object BoxsReaders extends Reads[Box] {

    def reads(json: JsValue): JsResult[Box] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[String]
        val large = (obj \ "large").as[Double]
        val width = (obj \ "width").as[Double]
        val high = (obj \ "high").as[Double]
        val paperboardId = (obj \ "paperboardId").as[BSONObjectID]
        val variationPositive = (obj \ "variationPositive").as[Int]
        val variationNegative = (obj \ "variationNegative").as[Int]
        val sellerPrice = (obj \ "sellerPrice").as[Double]
        val observations = (obj \ "observations").asOpt[String]
        val boxTypeId = (obj \ "boxTypeId").as[BSONObjectID]
        val quality = (obj \ "quality").as[Boolean]
        val plane = (obj \ "plane").as[Boolean]


        JsSuccess(Box(_id, code, large, width, high, paperboardId, variationPositive,
          variationNegative, sellerPrice, observations, boxTypeId, quality, plane))

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
      "large" -> box.large,
      "width" -> box.width,
      "high" -> box.high,
      "paperboardId" -> box.paperboardId,
      "variationPositive" -> box.variationPositive,
      "variationNegative" -> box.variationNegative,
      "sellerPrice" -> box.sellerPrice,
      "observations" -> box.observations,
      "boxTypeId" -> box.boxTypeId,
      "quality" -> box.quality,
      "plane" -> box.plane
    )
  }

}