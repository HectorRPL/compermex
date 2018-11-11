package controllers.materials

import javax.inject.Inject
import models.Pagination
import myservices.materials.{MaterialsService, PaperboardsService}
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class MaterialsController @Inject()(
                                     cc: ControllerComponents,
                                     materialsService: MaterialsService,
                                     paperboardsService: PaperboardsService
                                   )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def listColors() = Action.async {
    materialsService.getAllColor().map { colors =>
      Ok(Json.toJson(colors))
    }
  }

  def listTypes() = Action.async {
    materialsService.getAllTypes().map { types =>
      Ok(Json.toJson(types))
    }
  }

  def listStrengths() = Action.async {
    materialsService.getAllStrengths().map { strengths =>
      Ok(Json.toJson(strengths))
    }
  }

  def paperboars(name: String) = Action.async {
    val query = Json.obj(
      "description" -> Json.obj("$regex" -> name))
    val sort = Json.obj("description" -> -1)
    val pag = Pagination(20, 0)
    paperboardsService.getAll(query, sort, pag).map { paperBoards =>
      Ok(Json.toJson(paperBoards))
    }
  }


  /*def save() = Action.async() {implicit request =>
    request.body.validate[Address].map { data =>
      addressesService.save(data).map { result =>
        Ok(Json.toJson(result))
      }
    }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }*/

}

