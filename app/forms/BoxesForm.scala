package forms

import javax.print.attribute.standard.PrintQuality
import models.box.BoxSize
import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class BoxesForm(
                    code: String,
                    description: String,
                    boxTypeId: BSONObjectID,
                    companyId: Option[BSONObjectID],
                    customerId: Option[BSONObjectID],
                    employeeId: Option[BSONObjectID], // Checar el autocomplete, en maestro de materiales
                    large: Double,
                    width: Double,
                    high: Double,
                    boxesSize: Option[Seq[BoxSize]],
                    paperboardId: BSONObjectID,
                    variationPositive: Int,
                    variationNegative: Int,
                    sellerPrice: Double,
                    observations: Option[String],
                    quality: Boolean,
                    plane: Boolean,
                    size: String,
                    unitCost: Double
             )

object BoxesForm {
  implicit object BoxFormReaders extends Reads[BoxesForm] {

    def reads(json: JsValue): JsResult[BoxesForm] = json match {
      case obj: JsObject => try {
        val code = (obj \ "code").as[String]
        val description = (obj \ "description").as[String]
        val boxTypeId = (obj \ "boxTypeId").as[BSONObjectID]
        val companyId = (obj \ "companyId").asOpt[BSONObjectID]
        val customerId = (obj \ "customerId").asOpt[BSONObjectID]
        val employeeId = (obj \ "employeeId").asOpt[BSONObjectID]
        val large = (obj \ "large").as[Double]
        val width = (obj \ "width").as[Double]
        val high = (obj \ "high").as[Double]
        val boxesSize = (obj \ "boxesSize").asOpt[Seq[BoxSize]]
        val paperboardId = (obj \ "paperboardId").as[BSONObjectID]
        val variationPositive = (obj \ "variationPositive").as[Int]
        val variationNegative = (obj \ "variationNegative").as[Int]
        val sellerPrice = (obj \ "sellerPrice").as[Double]
        val observations = (obj \ "observations").asOpt[String]
        val quality = (obj \ "quality").as[Boolean]
        val plane = (obj \ "plane").as[Boolean]
        val size = (obj \ "size").as[String]
        val unitCost = (obj \ "unitCost").as[Double]



        JsSuccess(BoxesForm(code, description, boxTypeId, companyId, customerId, employeeId, large, width, high, boxesSize,
           paperboardId, variationPositive, variationNegative, sellerPrice, observations, quality, plane, size, unitCost))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object BoxFormWriter extends OWrites[BoxesForm] {
    def writes(boxesForm: BoxesForm): JsObject = Json.obj(
      "code" -> boxesForm.code,
      "description" -> boxesForm.description,
      "boxTypeId" -> boxesForm.boxTypeId,
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
      "observations" -> boxesForm.observations,
      "quality" -> boxesForm.quality,
      "plane" -> boxesForm.plane,
      "size" -> boxesForm.size,
      "unitCost" -> boxesForm.unitCost,
    )
  }


}

