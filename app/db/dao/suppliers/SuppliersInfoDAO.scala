package db.dao.suppliers

import models.supplier.SupplierInfo

import scala.concurrent.Future


trait SuppliersInfoDAO {

  def save(supplierInfo: SupplierInfo): Future[SupplierInfo]

}
