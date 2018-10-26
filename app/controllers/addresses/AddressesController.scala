package controllers.addresses

import javax.inject.Inject
import play.api.i18n.I18nSupport
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.ExecutionContext

class AddressesController @Inject()(
                                     cc: ControllerComponents
                                   )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {


}
