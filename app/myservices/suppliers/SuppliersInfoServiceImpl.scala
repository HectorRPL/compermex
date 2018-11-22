package myservices.suppliers

import db.dao.suppliers.{SuppliersDAO, SuppliersInfoDAO}
import javax.inject.Inject
import models.supplier.SupplierInfo

import scala.concurrent.{ExecutionContext, Future}

class SuppliersInfoServiceImpl @Inject()(
                                          implicit ec: ExecutionContext,
                                          suppliersInfoDAO: SuppliersInfoDAO
                                        ) extends SuppliersInfoService {

  def save(supplierInfo: SupplierInfo): Future[SupplierInfo] = {
    suppliersInfoDAO.save(supplierInfo)
  }
}
