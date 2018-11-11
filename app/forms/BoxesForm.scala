package forms

import models.box.{BoxSize}
import play.api.libs.json._
import reactivemongo.bson.{BSONObjectID}
import reactivemongo.play.json._

case class BoxesForm(
                    code: String,
                    descripcion: String,
                    boxTypeId: BSONObjectID,
                    companyId: BSONObjectID,
                    customerId: BSONObjectID,
                    employeeId: BSONObjectID, // Checar el autocomplete, en maestro de materiales
                    large: Double,
                    width: Double,
                    high: Double,
                    boxesSize: Option[Seq[BoxSize]],
                    paperboardId: BSONObjectID,
                    variationPositive: Int,
                    variationNegative: Int,
                    sellerPrice: Double,
                    observations: Option[String],
             )

object BoxesForm {
  implicit object BoxFormReaders extends Reads[BoxesForm] {

    def reads(json: JsValue): JsResult[BoxesForm] = json match {
      case obj: JsObject => try {
        val code = (obj \ "code").as[String]
        val descripcion = (obj \ "descripcion").as[String]
        val boxtypeId = (obj \ "boxtypeId").as[BSONObjectID]
        val companyId = (obj \ "companyId").as[BSONObjectID]
        val customerId = (obj \ "customerId").as[BSONObjectID]
        val employeId = (obj \ "employeId").as[BSONObjectID]
        val large = (obj \ "large").as[Double]
        val width = (obj \ "width").as[Double]
        val high = (obj \ "high").as[Double]
        val boxesSize = (obj \ "boxesSize").asOpt[Seq[BoxSize]]
        val paperboardId = (obj \ "paperboardId").as[BSONObjectID]
        val variationPositive = (obj \ "variationPositive").as[Int]
        val variationNegative = (obj \ "variationNegative").as[Int]
        val sellerPrice = (obj \ "sellerPrice").as[Double]
        val observations = (obj \ "observations").asOpt[String]



        JsSuccess(BoxesForm(code, descripcion, boxtypeId, companyId, customerId, employeId, large, width, high,
          boxesSize, paperboardId, variationPositive, variationNegative, sellerPrice, observations))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object BoxFormWriter extends OWrites[BoxesForm] {
    def writes(boxesForm: BoxesForm): JsObject = Json.obj(
      "code" -> boxesForm.code,
      "descripcion" -> boxesForm.descripcion,
      "boxtypeId" -> boxesForm.boxTypeId,
      "companyId" -> boxesForm.companyId,
      "customerId" -> boxesForm.customerId,
      "employeId" -> boxesForm.employeeId,
      "large" -> boxesForm.large,
      "width" -> boxesForm.width,
      "high" -> boxesForm.high,
      "boxesSize"  -> boxesForm.boxesSize,
      "paperboardId" -> boxesForm.paperboardId,
      "variationPositive" -> boxesForm.variationPositive,
      "variationNegative" -> boxesForm.variationNegative,
      "sellerPrice" -> boxesForm.sellerPrice,
      "observations" -> boxesForm.observations
    )
  }


}

