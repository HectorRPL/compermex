package db.dao.sales

import javax.inject.Inject
import models.Pagination
import models.sale.SaleOrder
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._
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

  def getList(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[SaleOrder]] = {
    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[SaleOrder](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[SaleOrder]]())
    )
  }
}
