package controllers.budget

import forms.{BudgetForm}
import javax.inject.Inject
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class BudgetController  @Inject()(
                                   cc: ControllerComponents
                                 )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  /*def create() = Action.async(parse.json) {implicit request =>
    request.body.validate[BudgetForm].map { formData =>



    }.recoverTotal {
      case error =>{
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
      }
    }


  }*/

}
