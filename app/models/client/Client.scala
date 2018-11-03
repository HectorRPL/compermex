package models.client

import reactivemongo.bson.BSONObjectID

case class Client (
                  _id: BSONObjectID,
                  code: Int,
                  name: String,
                  sellerId: BSONObjectID,
                  credit: Double,
                  creditDays: Int,
                  revisionDay: String,
                  paymentDay: String,
                  direccionId: BSONObjectID,
                  fiscalDataId: BSONObjectID
                  )
