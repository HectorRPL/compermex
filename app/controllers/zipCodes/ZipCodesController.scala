package controllers.zipCodes

import javax.inject.Inject
import models.Pagination
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
    val query = Json.obj("code" -> zipCode)
    val sort = Json.obj("colony" -> -1)
    val pag = Pagination(20, 1)
    zipCodesService.getAll(Some(query), Some(sort), pag)
      .map { neighbors =>
        Ok(Json.toJson(neighbors))
      }
  }


}
