package forms

import java.util.Date

import reactivemongo.bson.BSONObjectID

case class OrderForm (
                     orderDate: Date,
                     deliveryDate: Date,
                     supplierId: BSONObjectID,
                     clientId: BSONObjectID,
                     companyId: BSONObjectID,
                     orderCTE: String,
                     squareMeters: Double

                     )
