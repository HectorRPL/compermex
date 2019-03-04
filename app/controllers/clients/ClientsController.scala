package controllers.clients

import javax.inject.Inject
import models.Pagination
import models.client.Client
import myservices.clients.ClientsService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class ClientsController  @Inject()(
                                    cc: ControllerComponents,
                                    clientsService: ClientsService
                                  )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def list() = Action.async {
    val pag = Pagination(50, 0)
    val query = Json.obj()
    val sort = Json.obj()
    clientsService.getAll(query, sort, pag).map { clients =>
      Ok(Json.toJson(clients))
    }

  }

  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[Client].map { data =>
      clientsService.save(data).map { result =>
        Ok(Json.toJson(result))
      }
    }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }

  def search(name: String) = Action.async {
    val query = Json.obj(
      "name" -> Json.obj("$regex" -> name, "$options" -> "i" ))
    val sort = Json.obj("name" -> -1)
    val pag = Pagination(20, 0)

    clientsService.getAll(query, sort, pag).map { clients =>
      Ok(Json.toJson(clients))
    }
  }

}
