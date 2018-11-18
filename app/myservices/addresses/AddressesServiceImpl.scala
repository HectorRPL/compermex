package myservices.addresses
import db.dao.addresses.AddressesDAO
import javax.inject.Inject
import models.Pagination
import models.address.Address
import play.api.libs.json.{JsObject, Json}
import reactivemongo.bson.BSONObjectID

import scala.concurrent.{ExecutionContext, Future}

class AddressesServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      addressesDAO: AddressesDAO,
                                    )  extends AddressesService {

  def getAll(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Address]] = {

    addressesDAO.getList(query, sort, pag)
  }

  def save(address: Address): Future[Address] = {
    addressesDAO.save(address)
  }

  def getOne(_id: BSONObjectID): Future[Option[Address]] = ???
}
