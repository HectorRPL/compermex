package db.dao.purchases

import javax.inject.Inject
import models.purchase.PurchaseOrder
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class PurcharsesOrdersDAOImpl @Inject()(
                                         val reactiveMongoApi: ReactiveMongoApi
                                       ) extends PurchasesOrdersDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("purcharsesOrders"))

  def save(purchaseOrder: PurchaseOrder): Future[PurchaseOrder] = {
    val doc = purchaseOrder.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }
}
