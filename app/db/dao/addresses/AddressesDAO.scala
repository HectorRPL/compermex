package db.dao.addresses

import models.address.Address
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait AddressesDAO {

  def all(): Future[Seq[Address]]

  def one(id: BSONObjectID): Future[Option[Address]]

  def save(supplier: Address): Future[Address]

  def remove(): Future[Unit]

  def update(): Future[Unit]
}
