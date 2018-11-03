package models.company

import reactivemongo.bson.BSONObjectID

case class Company (
                   _id: BSONObjectID,
                   name: String,
                   code: String,
                   serialOrder: Int,
                   serialQuotation: Int
                   )
