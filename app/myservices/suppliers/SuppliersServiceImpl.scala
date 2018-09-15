package myservices.suppliers
import db.dao.suppliers.SuppliersDAO
import javax.inject.Inject
import models.supplier.Supplier
import reactivemongo.api.commands.WriteResult

import scala.concurrent.{ExecutionContext, Future}

class SuppliersServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      supplierDAO: SuppliersDAO
                                    ) extends SuppliersService {

  def getAll(): Future[Seq[Supplier]] = {
    supplierDAO.all()
  }

  def save(supplier: Supplier): Future[Supplier] = {
    supplierDAO.save(supplier)
  }
}
