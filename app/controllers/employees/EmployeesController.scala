package controllers.employees

import javax.inject.Inject
import models.Pagination
import models.employe.Employe
import myservices.employees.EmployeesService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class EmployeesController @Inject()(
                                     cc: ControllerComponents,
                                     employeesService: EmployeesService
                                   )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def list() = Action.async {
    val pag = Pagination(50, 0)
    val query = Json.obj()
    val sort = Json.obj()
    employeesService.getAll(query, sort, pag).map { employees =>
        Ok(Json.toJson(employees))
      }
  }

  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[Employe]
      .map { data =>
        employeesService.save(data).map { result =>
          Ok(Json.toJson(result))
        }
      }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }


  def search(name: String) = Action.async {
    val query = Json.obj(
      "fullName" -> Json.obj("$regex" -> name, "$options" -> "i" ))
    val sort = Json.obj("fullName" -> -1)
    val pag = Pagination(20, 0)

    employeesService.getAll(query, sort, pag).map { employees =>
      Ok(Json.toJson(employees))
    }
  }

}
