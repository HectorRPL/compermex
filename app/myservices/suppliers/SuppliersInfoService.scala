package myservices.suppliers

import models.supplier.SupplierInfo

import scala.concurrent.Future

trait SuppliersInfoService {

  def save(supplierInfo: SupplierInfo): Future[SupplierInfo]

}
