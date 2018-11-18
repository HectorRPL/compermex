package myservices.purchases

import forms.OrdersForm
import models.purchase.PurchaseOrder
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait PurchasesService {

  def save(purchaseOrder: PurchaseOrder): Future[PurchaseOrder]


}
