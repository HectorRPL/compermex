package controllers.orders

import forms.OrdersForm
import javax.inject.Inject
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class OrdersController @Inject()(
                                  cc: ControllerComponents,

                                )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {


  /*def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[OrdersForm].map { formData =>

      boxesService.save(box).map { box =>
        Ok(Json.toJson(box))
      }

    }.recoverTotal {
      case error =>{
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
      }
    }
  }*/





}
