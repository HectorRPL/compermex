package controllers.materials

import javax.inject.Inject
import models.Pagination
import models.material.Paperboard
import myservices.materials.{PaperboardsService}
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class PaperboardController @Inject()(
                                     cc: ControllerComponents,
                                     paperboardsService: PaperboardsService
                                   )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def paperboars(name: Option[String]) = Action.async { // TODO: Mover a PaperboardController
    val query = Json.obj(
      "description" -> Json.obj("$regex" -> name))

    val sort = Json.obj("description" -> -1)
    val pag = Pagination(20, 0)
    paperboardsService.getAll(query, sort, pag).map { paperBoards =>
      Ok(Json.toJson(paperBoards))
    }
  }

  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[Paperboard]
      .map { data =>
        paperboardsService.save(data).map { result =>
          Ok(Json.toJson(result))
        }
      }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }
}

