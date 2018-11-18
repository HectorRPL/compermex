package myservices.suppliers

import models.Pagination
import models.area.Area
import models.supplier.Supplier
import play.api.libs.json.JsObject
import reactivemongo.api.commands.WriteResult
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait SuppliersService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Supplier]]

  def save(supplier: Supplier): Future[Supplier]

  def update(query: JsObject, modifier: JsObject): Future[WriteResult]

  def getOne(_id: BSONObjectID): Future[Option[Supplier]]

}
