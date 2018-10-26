package models.supplier

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class SupplierInfo(
                         _id: Option[BSONObjectID],
                         supplierId: BSONObjectID,
                         creditDays: Option[String],
                         qualityCertificate: Option[Boolean],
                         price: Option[Double],
                         minLong: Option[Double],
                         maxLong: Option[Double],
                         minHigth: Option[Double],
                         maxHigth: Option[Double],
                         minSquareMeters: Option[Double])

object SupplierInfo {

  implicit object SupplierInfoReaders extends Reads[SupplierInfo] {

    def reads(json: JsValue): JsResult[SupplierInfo] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val supplierId = (obj \ "supplierId").as[BSONObjectID]
        val creditDays = (obj \ "creditDays").asOpt[String]
        val qualityCertificate = (obj \ "qualityCertificate").asOpt[Boolean]
        val price = (obj \ "price").asOpt[Double]
        val minLong = (obj \ "minLong").asOpt[Double]
        val maxLong = (obj \ "maxLong").asOpt[Double]
        val minHigth = (obj \ "minHigth").asOpt[Double]
        val maxHigth = (obj \ "maxHigth").asOpt[Double]
        val minSquareMeters = (obj \ "minSquareMeters").asOpt[Double]


        JsSuccess(SupplierInfo(_id, supplierId, creditDays, qualityCertificate, price,
          minLong, maxLong, minHigth, maxHigth, minSquareMeters))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object SupplierInfoWriter extends OWrites[SupplierInfo] {
    def writes(supplierInfo: SupplierInfo): JsObject = Json.obj(
      "_id" -> supplierInfo._id,
      "supplierId" -> supplierInfo.supplierId,
      "creditDays" -> supplierInfo.creditDays,
      "qualityCertificate" -> supplierInfo.qualityCertificate,
      "creditDays" -> supplierInfo.creditDays,
      "price" -> supplierInfo.price,
      "minLong" -> supplierInfo.minLong,
      "maxLong" -> supplierInfo.maxLong,
      "minHigth" -> supplierInfo.minHigth,
      "maxHigth"-> supplierInfo.maxHigth,
      "minSquareMeters"-> supplierInfo.minSquareMeters)
  }
}


