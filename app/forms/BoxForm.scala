package forms

import models.box.{BoxSize, BoxType}
import play.api.libs.json._
import reactivemongo.bson.{BSONArray, BSONObjectID}
import reactivemongo.play.json._

case class BoxForm(
                    code: String,
                    descripcion: String,
                    boxtypeId: BSONObjectID,
                    companyId: BSONObjectID,
                    customerId: BSONObjectID,
                    employeId: BSONObjectID, // Checar el autocomplete, en maestro de materiales
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

object BoxForm {
  implicit object BoxFormReaders extends Reads[BoxForm] {

    def reads(json: JsValue): JsResult[BoxForm] = json match {
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



        JsSuccess(BoxForm(code, descripcion, boxtypeId, companyId, customerId, employeId, large, width, high,
          boxesSize, paperboardId, variationPositive, variationNegative, sellerPrice, observations))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object BoxFormWriter extends OWrites[BoxForm] {
    def writes(boxForm: BoxForm): JsObject = Json.obj(
      "code" -> boxForm.code,
      "descripcion" -> boxForm.descripcion,
      "boxtypeId" -> boxForm.boxtypeId,
      "companyId" -> boxForm.companyId,
      "customerId" -> boxForm.customerId,
      "employeId" -> boxForm.employeId,
      "large" -> boxForm.large,
      "width" -> boxForm.width,
      "high" -> boxForm.high,
      "boxesSize"  -> boxForm.boxesSize,
      "paperboardId" -> boxForm.paperboardId,
      "variationPositive" -> boxForm.variationPositive,
      "variationNegative" -> boxForm.variationNegative,
      "sellerPrice" -> boxForm.sellerPrice,
      "observations" -> boxForm.observations
    )
  }


}

