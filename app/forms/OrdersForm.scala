package forms

import models.sale.SaleOrder
import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class OrdersForm(
                      companyId: BSONObjectID,
                      noOrder: String, //El id que se forma (ver PDF)
                      boxId: BSONObjectID, //Lo que se da de alta en el maestro de materiales.
                      numBoxes: Int,
                      customerId: BSONObjectID,
                      employeId: Option[BSONObjectID],
                      quality: Option[Boolean], //Requeire o no certificado de calidad (Verificar de que collecion proviene)
                      observations: String, //
                      fiscalDataId: Option[BSONObjectID], //Crear un autocomplete de los datos fiscales
                      kgMinLinier: Int,
                      kgMinKraft: Int,
                      total: Option[Double],
                      subtotal: Option[Double]
                    )

object OrdersForm {

  implicit val ordersFormFormat = Json.format[OrdersForm]

}



