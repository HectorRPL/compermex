package myservices.suppliers
import db.dao.suppliers.SuppliersDAO
import javax.inject.Inject
import models.Pagination
import models.supplier.Supplier
import play.api.libs.json.Json
import reactivemongo.api.commands.WriteResult

import scala.concurrent.{ExecutionContext, Future}

class SuppliersServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      supplierDAO: SuppliersDAO
                                    ) extends SuppliersService {

  def getAll(): Future[Seq[Supplier]] = {
    val pag = Pagination(50, 1)
    val query = Some(Json.obj())
    val sort = Some(Json.obj())

    supplierDAO.getList(query, sort, pag)
  }

  def save(supplier: Supplier): Future[Supplier] = {
    supplierDAO.save(supplier)
  }
}
