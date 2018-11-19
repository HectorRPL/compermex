package controllers.user

import com.mohiva.play.silhouette.api.{LogoutEvent, Silhouette}
import javax.inject.Inject
import play.api.Environment
import play.api.i18n.I18nSupport
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import utils.auth.DefaultEnv

import scala.concurrent.{ExecutionContext, Future}

class UserController  @Inject() (
                                  cc: ControllerComponents,
                                  environment: Environment,
                                  silhouette: Silhouette[DefaultEnv],
                                  implicit val executionContext: ExecutionContext)
  extends AbstractController(cc) with I18nSupport {

  /**
    * Returns the user.
    *
    * @return The result to display.
    */

  def user = silhouette.SecuredAction.async { implicit request =>
    Future.successful(Ok(Json.toJson(request.identity)))
  }

  /**
    * Manages the sign out action.
    */
  def signOut = silhouette.SecuredAction.async { implicit request =>
    silhouette.env.eventBus.publish(LogoutEvent(request.identity, request))
    silhouette.env.authenticatorService.discard(request.authenticator, Ok)
  }



}
