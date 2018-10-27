package controllers.addresses

import javax.inject.Inject
import models.address.Address
import myservices.addresses.AddressesService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class AddressesController @Inject()(
                                     cc: ControllerComponents,
                                     addressesService: AddressesService
                                   )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def list() = Action.async {
    addressesService.getAll().map { adddress =>
      Ok(Json.toJson(adddress))
    }

  }

  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[Address].map { data =>
      addressesService.save(data).map { result =>
        Ok(Json.toJson(result))
      }
    }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }

}
