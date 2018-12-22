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
                compexPrice: Double,
                boxTypeId: BSONObjectID
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
        val compexPrice = (obj \ "compexPrice").as[Double]
        val boxTypeId = (obj \ "boxTypeId").as[BSONObjectID]


        JsSuccess(Box(_id, code, large, width, high, paperboardId, compexPrice, boxTypeId))

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
      "compexPrice" -> box.compexPrice,
      "boxTypeId" -> box.boxTypeId
    )
  }

}