package forms

import java.util.Date

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID

case class OrderForm(
                      companyId: BSONObjectID,
                      serialOrder: Int,
                      serialQuotation: Int,
                      noOrder: String, //El id que se forma (ver PDF)
                      supplierId: BSONObjectID,
                      boxId: BSONObjectID, //Lo que se da de alta en el maestro de materiales.
                      numBoxes: Int,
                      clienteId: BSONObjectID,
                      variationPositive: Int,
                      variationNegative: Int,
                      quality: Boolean, //Requeire o no certificado de calidad (Verificar de que collecion proviene)
                      plane: String, //Plano de la caja(investigar de donde proviene)
                      observations: String, //
                      fiscalDataId: BSONObjectID, //Crear un autocomplete de los datos fiscales
                      paperboardId: BSONObjectID, //cartonId
                      boxTypeId: BSONObjectID, //Catalogo de tipo de cajas
                      kgMinLinier: Int,
                      kgMinKraft: Int,
                      //quotation: object //Generar view and model.(Especificaiones de Cotizacion)
                    )


object BoxForm {
  /**
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
  }**/


}



