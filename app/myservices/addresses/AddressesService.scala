package myservices.addresses

import models.Pagination
import models.address.Address
import play.api.libs.json.JsObject
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.Future

trait AddressesService {

  def getAll(query: BSONDocument, sort: JsObject,
             pag: Pagination): Future[Seq[Address]]

  def save(address: Address): Future[Address]

  def getOne(query: BSONDocument): Future[Option[Address]]
}
