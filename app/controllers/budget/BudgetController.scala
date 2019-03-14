package controllers.budget

import forms.BudgetForm
import javax.inject.Inject
import models.factor.Factor
import myservices.factors.FactorsService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class BudgetController  @Inject()(
                                   cc: ControllerComponents,
                                   factorsService: FactorsService
                                 )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def save() = Action.async(parse.json) {implicit request =>
    request.body.validate[BudgetForm].map { data =>

      val f = factorsService.getOne(data.boxTypeId, data.typeId, data.strengthId)

      f.map{ fact =>
        Ok(Json.toJson(fact))
      }
    }.recoverTotal {
      case error =>{
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
      }
    }

  }

}
