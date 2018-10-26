package db.dao.products

import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait ProductsDAO {

  def all(): Future[Seq[Product]]

  def one(id: BSONObjectID): Future[Option[Product]]

  def save(zipCode: Product): Future[Product]

  def remove(): Future[Unit]

  def update(): Future[Unit]
}
