package myservices.suppliers
import db.dao.suppliers.SuppliersDAO
import javax.inject.Inject
import models.Pagination
import models.supplier.Supplier
import play.api.libs.json.{JsObject, Json}

import scala.concurrent.{ExecutionContext, Future}

class SuppliersServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      supplierDAO: SuppliersDAO
                                    ) extends SuppliersService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Supplier]] = {

    supplierDAO.getList(query, sort, pag)
  }

  def save(supplier: Supplier): Future[Supplier] = {
    supplierDAO.save(supplier)
  }
}
