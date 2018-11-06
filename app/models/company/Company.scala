package models.company

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class Company (
                   _id: Option[BSONObjectID],
                   name: String,
                   code: String,
                   serialOrder: Int,
                   serialQuotation: Int
                   )

object Company {

  implicit object CompanyReaders extends Reads[Company] {

    def reads(json: JsValue): JsResult[Company] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val name = (obj \ "name").as[String]
        val code = (obj \ "code").as[String]
        val serialOrder = (obj \ "serialOrder").as[Int]
        val serialQuotation = (obj \ "serialQuotation").as[Int]

        JsSuccess(Company(_id, name, code, serialOrder, serialQuotation))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object CompanyWriter extends OWrites[Company] {
    def writes(company: Company): JsObject = Json.obj(
      "_id" -> company._id,
      "name" -> company.name,
      "code" -> company.code,
      "serialOrder" -> company.serialOrder,
      "serialQuotation" -> company.serialQuotation
    )
  }

}
