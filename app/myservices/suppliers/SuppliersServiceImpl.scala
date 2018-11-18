package myservices.suppliers
import db.dao.suppliers.SuppliersDAO
import javax.inject.Inject
import models.Pagination
import models.supplier.Supplier
import play.api.libs.json.{JsObject, Json}
import reactivemongo.api.commands.WriteResult
import reactivemongo.bson.BSONObjectID

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

  def update(query: JsObject, modifier: JsObject): Future[WriteResult] = {
    supplierDAO.update(query, modifier)
  }

  def getOne(_id: BSONObjectID): Future[Option[Supplier]] = {
    supplierDAO.getOne(_id)
  }
}
