package models.client

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


//TODO tenemos que agregar direccion de los cleintes y datosfiscales.
// TODO Se pone direccionIdm fiscalDataId, en option pero deberian de ir en  requerido
case class Client (
                  _id: Option[BSONObjectID],
                  code: Int,
                  name: String,
                  sellerId: Option[BSONObjectID],
                  credit: Option[Double],
                  creditDays: Option[Int],
                  revisionDay: Option[String],
                  paymentDay: Option[String],
                  addressId: Option[BSONObjectID],
                  fiscalDataId: Option[BSONObjectID],
                  companyId: Option[BSONObjectID]
                  )

object Client {

  implicit object ClientReaders extends Reads[Client] {

    def reads(json: JsValue): JsResult[Client] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val name = (obj \ "name").as[String]
        val sellerId = (obj \ "sellerId").asOpt[BSONObjectID]
        val credit = (obj \ "credit").asOpt[Double]
        val creditDays = (obj \ "creditDays").asOpt[Int]
        val revisionDay = (obj \ "revisionDay").asOpt[String]
        val paymentDay = (obj \ "paymentDay").asOpt[String]
        val addressId = (obj \ "addressId").asOpt[BSONObjectID]
        val fiscalDataId = (obj \ "fiscalDataId").asOpt[BSONObjectID]
        val companyId = (obj \ "companyId").asOpt[BSONObjectID]

        JsSuccess(Client(_id, code, name, sellerId, credit, creditDays,
          revisionDay, paymentDay, addressId, fiscalDataId, companyId))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }


  implicit object ClientWriter extends OWrites[Client] {
    def writes(client: Client): JsObject = Json.obj(
      "_id" -> client._id,
      "code" -> client.code,
      "name" -> client.name,
      "sellerId" -> client.sellerId,
      "credit" -> client.credit,
      "creditDays" -> client.creditDays,
      "revisionDay" -> client.revisionDay,
      "paymentDay" -> client.paymentDay,
      "addressId" -> client.addressId,
      "fiscalDataId" -> client.fiscalDataId,
      "companyId" -> client.companyId
    )
  }

}