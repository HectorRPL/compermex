package models.purchase

import reactivemongo.bson.BSONObjectID

case class PurchaseOrder(
                      _id: BSONObjectID,
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
                      moneyToPay: Double, // Dinero que debo
                      moneyPaid: Double,//Dinero Pagado
                      cubicMeters: Double,
                      creditDays: Int
                    )

object PurchaseOrder {

  /*implicit object CompanyReaders extends Reads[BuyOrder] {

    def reads(json: JsValue): JsResult[BuyOrder] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val name = (obj \ "name").as[String]
        val code = (obj \ "code").as[String]
        val serialOrder = (obj \ "serialOrder").as[Int]
        val serialQuotation = (obj \ "serialQuotation").as[Int]

        JsSuccess(BuyOrder(_id, name, code, serialOrder, serialQuotation))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object CompanyWriter extends OWrites[BuyOrder] {
    def writes(company: Company): JsObject = Json.obj(
      "_id" -> company._id,
      "name" -> company.name,
      "code" -> company.code,
      "serialOrder" -> company.serialOrder,
      "serialQuotation" -> company.serialQuotation
    )
  }*/


}