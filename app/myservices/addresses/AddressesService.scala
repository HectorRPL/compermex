package myservices.addresses

import models.address.Address

import scala.concurrent.Future

trait AddressesService {

  def getList(): Future[Seq[Address]]

  def save(supplier: Address): Future[Address]
}
