package controllers.supplier

import db.dao.suppliers.SuppliersDAO
import javax.inject.Inject
import models.supplier.Supplier
import myservices.suppliers.SuppliersService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class SuppliersController @Inject()(
                                     cc: ControllerComponents,
                                     suppliersServ: SuppliersService
                                   )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def list() = Action.async {
    suppliersServ.getAll().map { suppliers =>
      println(suppliers)
      Ok(Json.toJson(suppliers))
    }

  }

  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[Supplier].map { data =>
      suppliersServ.save(data).map { result =>
        Ok(Json.toJson(result))
      }
    }.recoverTotal {
      case error =>
        Future.successful(Unauthorized(Json.obj("message" -> Messages("invalid.data"))))
    }
  }

}
