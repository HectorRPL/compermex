package models.supplier

import play.api.libs.json._
import play.api.libs.functional.syntax._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


/**
  *
  * @param _id
  * @param name
  * @param email
  * @param phone
  */
case class Supplier(
                     _id: Option[BSONObjectID],
                     addressId: BSONObjectID,
                     cve: Option[String],
                     name: String,
                     email: Option[String],
                     phone: Option[String],
                     fax: Option[String],
                     contact: Option[String],
                     alias: String,
                     active: Boolean
                   )

object Supplier {


  implicit object SupplierReaders extends Reads[Supplier] {

    def reads(json: JsValue): JsResult[Supplier] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val addressId = (obj \ "addressId").as[BSONObjectID]
        val cve = (obj \ "cve").asOpt[String]
        val name = (obj \ "name").as[String]
        val email = (obj \ "email").asOpt[String]
        val phone = (obj \ "phone").asOpt[String]
        val fax = (obj \ "fax").asOpt[String]
        val contact = (obj \ "contact").asOpt[String]
        val alias = (obj \ "alias").as[String]
        val active = (obj \ "active").as[Boolean]


        JsSuccess(Supplier(_id, addressId, cve, name, email,
          phone, fax, contact, alias, active))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object SupplierWriter extends OWrites[Supplier] {
    def writes(supplier: Supplier): JsObject = Json.obj(
      "_id" -> supplier._id,
      "addressId" -> supplier.addressId,
      "cve" -> supplier.cve,
      "name" -> supplier.name,
      "email" -> supplier.email,
      "phone" -> supplier.phone,
      "fax" -> supplier.fax,
      "contact" -> supplier.contact,
      "alias"-> supplier.alias,
      "active"-> supplier.active)
  }

}