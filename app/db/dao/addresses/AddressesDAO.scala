package db.dao.addresses

import models.Pagination
import models.address.Address
import play.api.libs.json.JsObject
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.Future

trait AddressesDAO {

  def getList(query: BSONDocument, sort: JsObject,
              pag: Pagination): Future[Seq[Address]]

  def getOne(query: BSONDocument): Future[Option[Address]]

  def save(address: Address): Future[Address]

  def remove(query: BSONDocument): Future[Unit]

  def update(query: BSONDocument, modifier: BSONDocument): Future[Unit]
}
