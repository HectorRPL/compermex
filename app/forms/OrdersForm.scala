package forms

import models.sale.SaleOrder
import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class OrdersForm(
                      companyId: BSONObjectID,
                      noOrder: String, //El id que se forma (ver PDF)
                      supplierId: Option[BSONObjectID],
                      boxId: BSONObjectID, //Lo que se da de alta en el maestro de materiales.
                      numBoxes: Int,
                      clientId: BSONObjectID,
                      employeId: BSONObjectID,
                      quality: Boolean, //Requeire o no certificado de calidad (Verificar de que collecion proviene)
                      observations: String, //
                      fiscalDataId: Option[BSONObjectID], //Crear un autocomplete de los datos fiscales
                      paperboardId: Option[BSONObjectID], //cartonId
                      kgMinLinier: Int,
                      kgMinKraft: Int,
                      quantity: Int,
                      total: Double,
                      subtotal: Double
                    )

object OrdersForm {

  implicit val ordersFormFormat = Json.format[OrdersForm]

}



