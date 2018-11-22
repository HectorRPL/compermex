package db.dao.suppliers

import javax.inject.Inject
import models.supplier.SupplierInfo
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class SuppliersInfoDAOImpl @Inject()(
                                     val reactiveMongoApi: ReactiveMongoApi
                                   ) extends SuppliersInfoDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("suppliersInfo"))

  def save(supplierInfo: SupplierInfo): Future[SupplierInfo] = {
    val doc = supplierInfo.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }
}
