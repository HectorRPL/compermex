package db.dao.sales

import javax.inject.Inject
import models.sale.SaleOrder
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future


class SalesOrdersDAOImpl @Inject()(
                                    val reactiveMongoApi: ReactiveMongoApi
                                  ) extends SalesOrdersDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("salesOrders"))

  def save(saleOrder: SaleOrder): Future[SaleOrder] = {
    val doc = saleOrder.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }
}
