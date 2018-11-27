package controllers.areas

import javax.inject.Inject
import myservices.areas.AreasService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import reactivemongo.bson.{BSONDocument, BSONObjectID}

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


  def one(areaId: BSONObjectID) = Action.async {
    val query = BSONDocument("_id" -> areaId)
    areasService.getOne(query).map { optArea =>
      optArea.map { area =>
        Ok(Json.toJson(area))
      }.getOrElse(NotFound)
    }
  }

}
