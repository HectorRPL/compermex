package db.dao.addresses

import models.Pagination
import models.address.Address
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait AddressesDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Address]]

  def getOne(_id: BSONObjectID): Future[Option[Address]]

  def save(address: Address): Future[Address]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: Object): Future[Unit]
}
