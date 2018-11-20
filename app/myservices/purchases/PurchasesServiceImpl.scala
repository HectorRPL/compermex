package myservices.purchases

import db.dao.purchases.PurchasesOrdersDAO
import forms.OrdersForm
import javax.inject.Inject
import models.Pagination
import models.purchase.PurchaseOrder
import myservices.materials.PaperboardsService
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.{ExecutionContext, Future}

class PurchasesServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      purchasesOrdersDAO: PurchasesOrdersDAO,
                                      paperboardsService: PaperboardsService
                                    ) extends PurchasesService {

  def save(purchaseOrder: PurchaseOrder): Future[PurchaseOrder] = {
    purchasesOrdersDAO.save(purchaseOrder)
  }

  def getAll(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[PurchaseOrder]] = {
    purchasesOrdersDAO.getList(query, sort, pag)
  }
}
