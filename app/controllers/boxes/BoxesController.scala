package controllers.boxes

import forms.{BoxesForm}
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

  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[BoxesForm].map { formData =>
      val box = Box(
        _id = None,
        code = formData.code,
        description = formData.description,
        large = formData.large,
        width = formData.width,
        high = formData.high,
        companyId = formData.companyId,
        paperboardId = formData.paperboardId,
        clientId = formData.customerId,
        variationPositive = formData.variationPositive,
        variationNegative = formData.variationNegative,
        sellerPrice = formData.sellerPrice,
        observations = formData.observations,
        boxTypeId = formData.boxTypeId,
        quality = formData.quality,
        plane = formData.plane,
      )

      boxesService.save(box).map { box =>
        formData.boxesSize.map { sizes =>
          sizes.foreach(boxSize => {
            val boxSizeCopy = boxSize.copy(boxId = box._id)
            boxesService.saveBoxSize(boxSize).map(result => {
              print(result)
            }
            );
          })
        }
        Ok(Json.toJson(box))
      }
    }.recoverTotal {
      case error =>{
        print(error)
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
      }
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
