package models.box

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class BoxSize (
                _id: Option[BSONObjectID],
                boxId: BSONObjectID,
                size: String,
                large: Option[Double],
                width: Option[Double],
                high: Option[Double]
              )

object BoxSize {

  implicit object BoxSizeReaders extends Reads[BoxSize]{

    def reads(json: JsValue): JsResult[BoxSize] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val boxId = (obj \ "_id").as[BSONObjectID]
        val size = (obj \ "size").as[String]
        val large = (obj \ "large").asOpt[Double]
        val width = (obj \ "width").asOpt[Double]
        val high = (obj \ "high").asOpt[Double]

        JsSuccess(BoxSize(_id, boxId, size, large, width, high))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object BoxSizeWriter extends OWrites[BoxSize] {
    def writes(boxSize: BoxSize): JsObject = Json.obj(
      "_id" -> boxSize._id,
      "boxId" -> boxSize.boxId,
      "size" -> boxSize.size,
      "large" -> boxSize.large,
      "width" -> boxSize.width,
      "high" -> boxSize.high
    )
  }

}

