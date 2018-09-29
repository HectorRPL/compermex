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
                     name: String,
                     email: String,
                     phone: Option[Int]
                   )

object Supplier {

  /*implicit val supplierReads: Reads[Supplier] = (
    (JsPath \ "_id").readNullable[BSONObjectID] and
      (JsPath \ "name").read[String] and
      (JsPath \ "email").read[String] and
      (JsPath \ "phone").readNullable[Int]
    ) (Supplier.apply _)

  implicit val supplierWrites: Writes[Supplier] = (
    (JsPath \ "_id").writeNullable[BSONObjectID] and
    (JsPath \ "name").write[String] and
      (JsPath \ "email").write[String] and
      (JsPath \ "phone").writeNullable[Int]
    )(unlift(Supplier.unapply))

  implicit val supplierFormat: OFormat[Supplier] = Json.format[Supplier]*/


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