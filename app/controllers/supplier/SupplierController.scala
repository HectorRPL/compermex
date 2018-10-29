package controllers.supplier

import javax.inject.Inject
import models.Pagination
import models.supplier.Supplier
import myservices.suppliers.SuppliersService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class SupplierController @Inject()(
                                     cc: ControllerComponents,
                                     suppliersServ: SuppliersService
                                   )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def list() = Action.async {
    val pag = Pagination(50, 1)
    val query = Some(Json.obj())
    val sort = Some(Json.obj())
    suppliersServ.getAll(query, sort, pag).map { suppliers =>
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
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }

  def search(name: String) = Action.async {
    val query = Json.obj(
      "name" -> Json.obj("$regex" -> name))
    val sort = Json.obj("name" -> -1)
    val pag = Pagination(20, 1)

    suppliersServ.getAll(Some(query), Some(sort), pag).map { suppliers =>
      Ok(Json.toJson(suppliers))
    }
  }

}
