package controllers.supplier

import db.dao.suppliers.SuppliersDAO
import javax.inject.Inject
import myservices.suppliers.SuppliersService
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.ExecutionContext

class SuppliersController @Inject()(
                                     cc: ControllerComponents,
                                     suppliersServ: SuppliersService
                                   )(implicit ec: ExecutionContext)
  extends AbstractController(cc) {

  def list() = Action.async {
    suppliersServ.getAll().map { suppliers =>
      println(suppliers)
      Ok(Json.toJson(suppliers))
    }

  }

}
