package models.supplier

import play.api.libs.json.{Json, OFormat}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class SupplierProduct (
                             _id: Option[BSONObjectID],
                             supplierId: BSONObjectID,
                             paperboardId: BSONObjectID,
                             costKG: Double,
                             costMillar: Double,
                             kgM2:Double,
                             factorId: BSONObjectID
                           )
object SupplierProduct {

  implicit val supplierProductFormat: OFormat[SupplierProduct] = Json.format[SupplierProduct]

}