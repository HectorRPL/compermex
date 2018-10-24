package models.address

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Address(
                    _id: Option[BSONObjectID],
                    ownerId: Option[BSONObjectID],
                    street: String,
                    town: String,
                    state: String,
                    stateCode: String,
                    colony: String,
                    zipCode: String,
                    numExt: String,
                    numInt: Option[String]
                  )


object Address {

  implicit object AddressReaders extends Reads[Address] {

    def reads(json: JsValue): JsResult[Address] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val ownerId = (obj \ "ownerId").asOpt[BSONObjectID]
        val street = (obj \ "street").as[String]
        val town = (obj \ "town").as[String]
        val state = (obj \ "state").as[String]
        val stateCode = (obj \ "stateCode").as[String]
        val colony = (obj \ "colony").as[String]
        val zipCode = (obj \ "zipCode").as[String]
        val numExt = (obj \ "numExt").as[String]
        val numInt = (obj \ "numExt").asOpt[String]


        JsSuccess(Address(_id, ownerId, street, town, state,
          stateCode, colony, zipCode, numExt, numInt))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object ZipCodesWriter extends OWrites[Address] {
    def writes(address: Address): JsObject = Json.obj(
      "_id" -> address._id,
      "ownerId" -> address.ownerId,
      "street" -> address.street,
      "town" -> address.town,
      "state" -> address.state,
      "stateCode" -> address.stateCode,
      "colony" -> address.colony,
      "zipCode" -> address.zipCode,
      "numExt" -> address.numExt,
      "numInt" -> address.stateCode
    )
  }

}