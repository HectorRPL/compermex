package controllers.areas

import javax.inject.Inject
import myservices.areas.AreasService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class AreasController @Inject()(
                                 cc: ControllerComponents,
                                 areasService: AreasService
                               )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {


  def list() = Action.async {
    areasService.getAll().map { areas =>
      Ok(Json.toJson(areas))
    }

  }


}
