package db.dao.purchases

import javax.inject.Inject
import models.Pagination
import models.purchase.PurchaseOrder
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class PurchasesOrdersDAOImpl @Inject()(
                                         val reactiveMongoApi: ReactiveMongoApi
                                       ) extends PurchasesOrdersDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("purcharsesOrders"))

  def save(purchaseOrder: PurchaseOrder): Future[PurchaseOrder] = {
    val doc = purchaseOrder.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def getList(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[PurchaseOrder]] = {
    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[PurchaseOrder](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[PurchaseOrder]]())
    )
  }
}
