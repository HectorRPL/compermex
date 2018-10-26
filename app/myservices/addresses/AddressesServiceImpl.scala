package myservices.addresses
import models.address.Address

import scala.concurrent.Future

class AddressesServiceImpl extends AddressesService {
  def getList(): Future[Seq[Address]] = ???

  def save(supplier: Address): Future[Address] = ???
}
