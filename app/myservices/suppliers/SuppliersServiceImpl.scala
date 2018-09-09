package myservices.suppliers
import db.dao.suppliers.SuppliersDAO
import javax.inject.Inject
import models.supplier.Supplier

import scala.concurrent.{ExecutionContext, Future}

class SuppliersServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      supplierDAO: SuppliersDAO
                                    ) extends SuppliersService {

  def getAll(): Future[Seq[Supplier]] = {
    supplierDAO.all()
  }
}
