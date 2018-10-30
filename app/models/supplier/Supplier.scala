package models.supplier

import play.api.libs.json._
import play.api.libs.functional.syntax._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._



case class Supplier(
                     _id: Option[BSONObjectID],
                     addressId: Option[BSONObjectID],
                     code: Option[Int],
                     name: String,
                     email: Option[String],
                     phone: Option[String],
                     fax: Option[String],
                     contact: Option[String],
                     alias: Option[String],
                     active: Option[Boolean]
                   )

object Supplier {


  implicit object SupplierReaders extends Reads[Supplier] {

    def reads(json: JsValue): JsResult[Supplier] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val addressId = (obj \ "addressId").asOpt[BSONObjectID]
        val code = (obj \ "code").asOpt[Int]
        val name = (obj \ "name").as[String]
        val email = (obj \ "email").asOpt[String]
        val phone = (obj \ "phone").asOpt[String]
        val fax = (obj \ "fax").asOpt[String]
        val contact = (obj \ "contact").asOpt[String]
        val alias = (obj \ "alias").asOpt[String]
        val active = (obj \ "active").asOpt[Boolean]


        JsSuccess(Supplier(_id, addressId, code, name, email,
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
      "code" -> supplier.code,
      "name" -> supplier.name,
      "email" -> supplier.email,
      "phone" -> supplier.phone,
      "fax" -> supplier.fax,
      "contact" -> supplier.contact,
      "alias"-> supplier.alias,
      "active"-> supplier.active)
  }

}