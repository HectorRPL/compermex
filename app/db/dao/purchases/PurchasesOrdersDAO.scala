package db.dao.purchases

import models.purchase.PurchaseOrder

import scala.concurrent.Future

trait PurchasesOrdersDAO {

  def save(purchaseOrder: PurchaseOrder): Future[PurchaseOrder]

}
