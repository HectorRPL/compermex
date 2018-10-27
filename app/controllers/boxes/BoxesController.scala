package controllers.boxes

import javax.inject.Inject
import models.box.Box
import myservices.boxes.BoxesService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class BoxesController  @Inject()(
                                  cc: ControllerComponents,
                                  boxesService: BoxesService,
                                )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def list() = Action.async {
    boxesService.getAll().map { boxes =>
      Ok(Json.toJson(boxes))
    }

  }

  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[Box].map { data =>
      boxesService.save(data).map { result =>
        Ok(Json.toJson(result))
      }
    }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }

}
