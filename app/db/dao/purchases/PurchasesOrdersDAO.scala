package db.dao.purchases

import models.Pagination
import models.purchase.PurchaseOrder
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait PurchasesOrdersDAO {

  def save(purchaseOrder: PurchaseOrder): Future[PurchaseOrder]

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[PurchaseOrder]]

}
