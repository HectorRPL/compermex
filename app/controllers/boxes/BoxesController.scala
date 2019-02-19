package controllers.boxes

import javax.inject.Inject
import models.Pagination
import models.box.Box
import myservices.boxes.BoxesService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class BoxesController @Inject()(
                                 cc: ControllerComponents,
                                 boxesService: BoxesService,
                               )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def list() = Action.async {
    val pag = Pagination(50, 0)
    val query = Json.obj()
    val sort = Json.obj()
    boxesService.getAll(query, sort, pag).map { boxes =>
      Ok(Json.toJson(boxes))
    }

  }

  def listBoxesTypes() = Action.async {
    val pag = Pagination(50, 0)
    val query = Json.obj()
    val sort = Json.obj()
    boxesService.getBoxeTypes(query, sort, pag).map { boxes =>
      Ok(Json.toJson(boxes))
    }
  }


  def search(name: String) = Action.async {
    val query = Json.obj(
      "description" -> Json.obj("$regex" -> name, "$options" -> "i" ))
    val sort = Json.obj("name" -> -1)
    val pag = Pagination(20, 0)
    boxesService.getAll(query, sort, pag).map { boxes =>
      Ok(Json.toJson(boxes))
    }
  }



}
