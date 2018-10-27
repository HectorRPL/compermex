package controllers.areas

import javax.inject.Inject
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}

import scala.concurrent.{ExecutionContext, Future}

class AreasController @Inject()(
                                   cc: ControllerComponents
                                 )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {



}
