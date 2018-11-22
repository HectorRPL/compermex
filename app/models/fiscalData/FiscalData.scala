package models.fiscalData

import play.api.libs.json.{Json, OFormat}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class FiscalData (
                      _id:Option[BSONObjectID],
                      rfc: String,
                      businessName: String,
                      personType: String
                      )
object FiscalData{

  implicit val fiscalDataFormat: OFormat[FiscalData] = Json.format[FiscalData]
}
