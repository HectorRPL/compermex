package myservices.addresses

import models.Pagination
import models.address.Address
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait AddressesService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Address]]

  def save(address: Address): Future[Address]

  def getOne(_id: BSONObjectID): Future[Option[Address]]
}
