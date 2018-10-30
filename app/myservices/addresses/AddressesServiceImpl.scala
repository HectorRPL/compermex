package myservices.addresses
import db.dao.addresses.AddressesDAO
import javax.inject.Inject
import models.Pagination
import models.address.Address
import play.api.libs.json.Json

import scala.concurrent.{ExecutionContext, Future}

class AddressesServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      addressesDAO: AddressesDAO,
                                    )  extends AddressesService {

  def getAll(): Future[Seq[Address]] = {
    val pag = Pagination(50, 1)
    val query = Json.obj()
    val sort = Json.obj()

    addressesDAO.getList(query, sort, pag)
  }

  def save(address: Address): Future[Address] = {
    addressesDAO.save(address)
  }
}
