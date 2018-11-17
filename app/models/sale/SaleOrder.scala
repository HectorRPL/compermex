package models.sale

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class SaleOrder(
                      _id: BSONObjectID,
                      boxId: BSONObjectID,
                      quantity: Int,
                      employeId: BSONObjectID,
                      clientId: BSONObjectID,
                      companyId: BSONObjectID,
                      cubicMeters: Double,
                      fiscalDataId: Option[BSONObjectID],
                      total: Double,
                      subtotal: Double,
                      numTotalProducts: Int,
                      numTotalCancel: Int,
                      numTotalDelivered: Int,
                      numSaleOrder: String,
                      moneyCollect: Double, //Saldo por Cobrar
                      moneyCharged: Double // total cobrado
                    )

object SaleOrder {

  implicit val saleOrderFormat = Json.format[SaleOrder]

}