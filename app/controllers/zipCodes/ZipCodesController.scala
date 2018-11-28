package controllers.zipCodes

import javax.inject.Inject
import models.Pagination
import myservices.zipCodes.ZipCodesService
import play.api.i18n.I18nSupport
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import reactivemongo.bson.BSONDocument

import scala.concurrent.ExecutionContext

class ZipCodesController @Inject()(
                                    cc: ControllerComponents,
                                    zipCodesService: ZipCodesService,
                                  )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {


  def colonies(zipCode: String) = Action.async {
    val query = BSONDocument("code" -> zipCode)
    val sort = Json.obj("colony" -> -1)
    val pag = Pagination(20, 0)
    
    zipCodesService.getAll(query, sort, pag)
      .map { neighbors =>
        Ok(Json.toJson(neighbors))
      }
  }


}
