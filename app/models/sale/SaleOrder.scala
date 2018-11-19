package models.sale

import java.util.Date

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class SaleOrder(
                      _id: Option[BSONObjectID],
                      boxId: BSONObjectID,
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
                      moneyCharged: Double, // total cobrado,
                      VoBoQuality: Option[Date],
                      status: Int
                    )

object SaleOrder {

  implicit val saleOrderFormat: OFormat[SaleOrder] = Json.format[SaleOrder]

}