package controllers.factors

import javax.inject.Inject
import models.Pagination
import models.factor.Factor
import myservices.factors.FactorsService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.{JsObject, Json}
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class FactorController @Inject()(
                                  cc: ControllerComponents,
                                  factorsService: FactorsService
                                )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def factors(name: String, curPage: Int, pageSize: Int) = Action.async {

    val query = buildDescriptionQuery(name)

    val sort = Json.obj("type.description" -> -1)
    val pag = Pagination.fromPages(curPage, pageSize)

    factorsService.getAll(query, sort, pag).map { factor =>
      Ok(Json.toJson(factor))
    }
  }

  def count(name: String) = Action.async {
   val query = buildDescriptionQuery(name)

    factorsService.count(query).map { result =>
      Ok(Json.toJson(result))
    }
  }


  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[Factor]
      .map { data =>
        factorsService.save(data).map { result =>
          Ok(Json.toJson(result))
        }
      }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }

  def buildDescriptionQuery(name: String): JsObject = {
    Json.obj("$or" ->
      Json.arr(
        Json.obj(
          "materialType.description" ->
            Json.obj(
              "$regex" -> name,
              "$options" -> "i"
            )
        ),
        Json.obj("boxType.description" ->
          Json.obj(
            "$regex" -> name,
            "$options" -> "i"
          )
        ),
        Json.obj("strength.description" ->
          Json.obj(
            "$regex" -> name,
            "$options" -> "i"
          )
        )
      )
    )
  }
}

