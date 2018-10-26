package models.area

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Area(
                      _id: Option[BSONObjectID],
                      description: String
                      )

object Area {

  implicit object AreaReaders extends Reads[Area] {

    def reads(json: JsValue): JsResult[Area] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val description = (obj \ "description").as[String]


        JsSuccess(Area(_id, description))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object ZipCodesWriter extends OWrites[Area] {
    def writes(area: Area): JsObject = Json.obj(
      "_id" -> area._id,
      "description" -> area.description
    )
  }

}