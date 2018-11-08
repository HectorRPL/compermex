package models.sale

import reactivemongo.bson.BSONObjectID

case class SaleOrder (
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
                     moneyCollect: Double,//Saldo por Cobrar
                     moneyCharged: Double// total cobrado
                     )
object SaleOrder{

}