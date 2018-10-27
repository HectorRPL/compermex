package myservices.addresses

import models.address.Address

import scala.concurrent.Future

trait AddressesService {

  def getAll(): Future[Seq[Address]]

  def save(address: Address): Future[Address]
}
