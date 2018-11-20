package myservices.purchases

import models.Pagination
import models.purchase.PurchaseOrder
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait PurchasesService {

  def save(purchaseOrder: PurchaseOrder): Future[PurchaseOrder]

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[PurchaseOrder]]


}
