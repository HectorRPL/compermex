package db.dao.suppliers

import models.supplier.Supplier
import reactivemongo.api.commands.WriteResult
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait SuppliersDAO {


  def all(): Future[Seq[Supplier]]

  def one(id: BSONObjectID): Future[Option[Supplier]]

  def save(supplier: Supplier): Future[Supplier]

  def remove(): Future[Unit]

  def update(): Future[Unit]

}
