package db.dao.suppliers

import models.Pagination
import models.supplier.Supplier
import play.api.libs.json.JsObject
import reactivemongo.api.commands.WriteResult
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait SuppliersDAO {


  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Supplier]]

  def getOne(_id: BSONObjectID): Future[Option[Supplier]]

  def save(supplier: Supplier): Future[Supplier]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: JsObject): Future[WriteResult]

}
