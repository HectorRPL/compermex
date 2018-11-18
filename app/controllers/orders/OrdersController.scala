package controllers.orders

import forms.OrdersForm
import javafx.print.Paper
import javax.inject.Inject
import models.purchase.PurchaseOrder
import models.sale.SaleOrder
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
                                  paperboardsService: PaperboardsService
                                )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {


  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[OrdersForm].map { formData =>

      val saleOrder = SaleOrder(
        _id = None,
        boxId = formData.boxId,
        employeId = formData.employeId,
        clientId = formData.clientId,
        companyId = formData.companyId,
        cubicMeters = 0,
        fiscalDataId = formData.fiscalDataId,
        total = formData.total,
        subtotal = formData.subtotal,
        numTotalProducts = formData.quantity,
        numTotalCancel = 0,
        numTotalDelivered = 0,
        numSaleOrder = formData.noOrder,
        moneyCollect = 0.0, //Saldo por Cobrar
        moneyCharged = 0.0
      )

      salesService.save(saleOrder).map { sale =>
        paperboardsService.getOne(formData.paperboardId.get).flatMap{
          case (paperboard) => {
            val purchase = PurchaseOrder(
              _id = None,
              supplierId = paperboard.get._id.get,//asdasdasdasdasdasdasd
              employeId = formData.employeId,
              saleOrderId = sale._id.get,
              paperboardId = formData.paperboardId.get,
              fiscalDataId = formData.fiscalDataId,
              folioInvoice = "sdsdadsa",
              total = formData.total,
              subtotal = formData.total,
              numTotalProducts = 0,
              numTotalCancel = 0,
              numTotalDelivered = 0,
              moneyToPay = 0, // Dinero que debo
              moneyPaid = 0, //Dinero Pagado
              cubicMeters = 0.0,
              creditDays = 0
            )
            purchasesService.save(purchase)
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




}
