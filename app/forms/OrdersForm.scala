package forms

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class OrdersForm(
                      companyId: BSONObjectID,
                      noOrder: String, //El id que se forma (ver PDF)
                      supplierId: BSONObjectID,
                      boxId: BSONObjectID, //Lo que se da de alta en el maestro de materiales.
                      numBoxes: Int,
                      clientId: BSONObjectID,
                      employeId: BSONObjectID,
                      quality: Boolean, //Requeire o no certificado de calidad (Verificar de que collecion proviene)
                      observations: String, //
                      fiscalDataId: BSONObjectID, //Crear un autocomplete de los datos fiscales
                      paperboardId: BSONObjectID, //cartonId
                      kgMinLinier: Int,
                      kgMinKraft: Int,

                    )

object OrdersForm {

  implicit object OrdersFormReaders extends Reads[OrdersForm] {

    def reads(json: JsValue): JsResult[OrdersForm] = json match {
      case obj: JsObject => try {
        val companyId = (obj \ "companyId").as[BSONObjectID]
        val noOrder = (obj \ "noOrder").as[String]
        val supplierId = (obj \ "supplierId").as[BSONObjectID]
        val boxId = (obj \ "boxId").as[BSONObjectID]
        val numBoxes = (obj \ "numBoxes").as[Int]
        val clientId = (obj \ "clientId").as[BSONObjectID]
        val employeId = (obj \ "employeId").as[BSONObjectID]
        val quality = (obj \ "quality").as[Boolean]
        val observations = (obj \ "observations").as[String]
        val fiscalDataId = (obj \ "fiscalDataId").as[BSONObjectID]
        val paperboardId = (obj \ "paperboardId").as[BSONObjectID]
        val kgMinLinier = (obj \ "kgMinLinier").as[Int]
        val kgMinKraft = (obj \ "kgMinKraft").as[Int]


        JsSuccess(OrdersForm(companyId, noOrder, supplierId, boxId, numBoxes, clientId, employeId,
          quality, observations, fiscalDataId, paperboardId, kgMinLinier, kgMinKraft))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object OrdersFormWriter extends OWrites[OrdersForm] {
    def writes(orderForm: OrdersForm): JsObject = Json.obj(
      "companyId" -> orderForm.companyId,
      "noOrder" -> orderForm.noOrder,
      "boxId" -> orderForm.boxId,
      "numBoxes" -> orderForm.numBoxes,
      "clienteId" -> orderForm.clientId,
      "employeId" -> orderForm.employeId,
      "quality" -> orderForm.quality,
      "observations" -> orderForm.observations,
      "fiscalDataId" -> orderForm.fiscalDataId,
      "paperboardId"  -> orderForm.paperboardId,
      "kgMinLinier" -> orderForm.kgMinLinier,
      "kgMinKraft" -> orderForm.kgMinKraft
    )
  }


}



