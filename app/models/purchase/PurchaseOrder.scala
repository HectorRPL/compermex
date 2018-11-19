package models.purchase

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class PurchaseOrder(
                      _id: Option[BSONObjectID],
                      supplierId: BSONObjectID,
                      employeId: BSONObjectID,
                      saleOrderId: BSONObjectID,
                      paperboardId: BSONObjectID,
                      fiscalDataId: Option[BSONObjectID],
                      folioInvoice:  String,
                      total: Double,
                      subtotal: Double,
                      numTotalProducts: Int,
                      numTotalCancel: Int,
                      numTotalDelivered: Int,
                      numTotalQuality: Int,
                      moneyToPay: Double, // Dinero que debo
                      moneyPaid: Double,//Dinero Pagado
                      cubicMeters: Double,
                      creditDays: Int,
                      status: Int
                    )

object PurchaseOrder {

  implicit val purchaseOrderFormat = Json.format[PurchaseOrder]


}