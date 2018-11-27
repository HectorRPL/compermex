package myservices.addresses
import db.dao.addresses.AddressesDAO
import javax.inject.Inject
import models.Pagination
import models.address.Address
import play.api.libs.json.{JsObject, Json}
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.{ExecutionContext, Future}

class AddressesServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      addressesDAO: AddressesDAO,
                                    )  extends AddressesService {

  def getAll(query: BSONDocument, sort: JsObject, pag: Pagination): Future[Seq[Address]] = {

    addressesDAO.getList(query, sort, pag)
  }

  def save(address: Address): Future[Address] = {
    addressesDAO.save(address)
  }

  def getOne(query: BSONDocument): Future[Option[Address]] = ???
}
