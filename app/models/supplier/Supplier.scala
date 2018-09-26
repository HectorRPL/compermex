package models.supplier

import play.api.libs.json._
import play.data.validation.Constraints.EmailValidator
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
                     name: String,
                     email: String,
                     phone: Option[Int]
                   )

object Supplier {


  implicit object SupplierReaders extends Reads[Supplier] {

    def reads(json: JsValue): JsResult[Supplier] = json match {
      case obj: JsObject => try {
        val id = (obj \ "_id").asOpt[BSONObjectID]
        val name = (obj \ "name").as[String]
        val email = (obj \ "email").as[String]
        val phone = (obj \ "phone").asOpt[Int]


        JsSuccess(Supplier(id,  name, email, phone))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object SupplierWriter extends OWrites[Supplier] {
    def writes(supplier: Supplier): JsObject = Json.obj(
      "_id" -> supplier._id,
      "name" -> supplier.name,
      "email" -> supplier.email,
      "phone" -> supplier.phone)
  }


}