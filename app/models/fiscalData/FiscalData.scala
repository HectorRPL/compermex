package models.fiscalData

import reactivemongo.bson.BSONObjectID

case class FiscalData (
                      _id:BSONObjectID,
                      rfc: String,
                      businessName: String,
                      personType: String
                      )
