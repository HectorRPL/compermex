package controllers.orders

import forms.OrdersForm
import javafx.print.Paper
import javax.inject.Inject
import models.Pagination
import models.purchase.PurchaseOrder
import models.sale.SaleOrder
import myservices.boxes.BoxesService
import myservices.materials.PaperboardsService
import myservices.purchases.PurchasesService
import myservices.sales.SalesService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class OrdersController @Inject()(
                                  cc: ControllerComponents,
                                  salesService: SalesService,
                                  purchasesService: PurchasesService,
                                  paperboardsService: PaperboardsService,
                                  boxesService: BoxesService
                                )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {


  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[OrdersForm].map { formData =>

      val saleOrder = SaleOrder(
        _id = None,
        boxId = formData.boxId,
        employeId = formData.employeId,
        clientId = formData.customerId,
        companyId = formData.companyId,
        cubicMeters = 0,
        fiscalDataId = formData.fiscalDataId,
        total = formData.total.get,
        subtotal = 0.0,
        numTotalProducts = formData.numBoxes,
        numTotalCancel = 0,
        numTotalDelivered = 0,
        numSaleOrder = formData.noOrder,
        moneyCollect = 0.0, //Saldo por Cobrar
        moneyCharged = 0.0,
        VoBoQuality = None,
        status = 0
      )

      salesService.save(saleOrder).map { sale =>
        boxesService.getOneBox(formData.boxId).flatMap{
          case (box) => {
            paperboardsService.getOne(box.get.paperboardId).flatMap{
              case (paperboard) => {
                val purchase = PurchaseOrder(
                  _id = None,
                  supplierId = paperboard.get.supplierId,
                  employeId = formData.employeId,
                  saleOrderId = sale._id.get,
                  paperboardId = paperboard.get._id.get,
                  fiscalDataId = formData.fiscalDataId,
                  folioInvoice = "sdsdadsa",
                  total = 0.0,
                  subtotal = 0.0,
                  numTotalProducts = 0,
                  numTotalCancel = 0,
                  numTotalDelivered = 0,
                  numTotalQuality = 0,
                  moneyToPay = 0, // Dinero que debo
                  moneyPaid = 0, //Dinero Pagado
                  cubicMeters = 0.0,
                  creditDays = 0,
                  status = 0
                )
                purchasesService.save(purchase)
              }
            }
          }
        }
        Ok(Json.toJson(sale))
      }

    }.recoverTotal {
      case error => {
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
      }
    }
  }


  def toReceive() = Action.async{
    val query = Json.obj("status" -> Json.obj("$eq" -> 0))
    val sort = Json.obj()
    val pag = Pagination(20, 0)

    purchasesService.getAll(query, sort, pag).map{ purchaseOrders =>
      Ok(Json.toJson(purchaseOrders))
    }
  }

  def toQuality() = Action.async{
    val query = Json.obj("status" -> Json.obj("$eq" -> 1))
    val sort = Json.obj()
    val pag = Pagination(20, 0)

    purchasesService.getAll(query, sort, pag).map{ purchaseOrders =>
      Ok(Json.toJson(purchaseOrders))
    }
  }


}
