package controllers.zipCodes

import javax.inject.Inject
import myservices.zipCodes.ZipCodesService
import play.api.i18n.I18nSupport
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.ExecutionContext

class ZipCodesController @Inject()(
                                    cc: ControllerComponents,
                                    zipCodesService: ZipCodesService,
                                  )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {


  def neighborhoods(zipCode: String) = Action.async {
    val query = Json.toJson("code" -> zipCode)
    zipCodesService.getAll().map { neighbors =>
      Ok(Json.toJson(neighbors))
    }

  }


}
