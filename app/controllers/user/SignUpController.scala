package controllers.user

import java.util.{Date, UUID}

import akka.japi.Option
import com.mohiva.play.silhouette.api.{LoginEvent, LoginInfo, SignUpEvent, Silhouette}
import com.mohiva.play.silhouette.api.repositories.AuthInfoRepository
import com.mohiva.play.silhouette.api.services.AvatarService
import com.mohiva.play.silhouette.api.util.PasswordHasher
import com.mohiva.play.silhouette.impl.providers.CredentialsProvider
import forms.SignUpForm.SignUpForm
import javax.inject.Inject
import models.employe.Employe
import models.user.User
import myservices.employees.EmployeesService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import myservices.user.{AuthTokenService, UserService}
import utils.auth.DefaultEnv

import scala.concurrent.{ExecutionContext, Future}

class SignUpController @Inject()(
                                  cc: ControllerComponents,
                                  silhouette: Silhouette[DefaultEnv],
                                  userService: UserService,
                                  authTokenService: AuthTokenService,
                                  authInfoRepository: AuthInfoRepository,
                                  avatarService: AvatarService,
                                  passwordHasher: PasswordHasher,
                                  employeesService: EmployeesService
                                )(implicit ec: ExecutionContext)
  extends AbstractController(cc) with I18nSupport {


  def signUp() = Action.async(parse.json) { implicit request =>

    request.body.validate[SignUpForm].map { signUpData =>
      val loginInfo = LoginInfo(CredentialsProvider.ID, signUpData.username)
      userService.retrieve(loginInfo).flatMap {
        case Some(user) =>
          Future.successful(BadRequest(
            Json.obj("message" -> Messages("user.exists")))
          )
        case None =>
          val authInfo = passwordHasher.hash(signUpData.password)
          val user = User(
            _id = UUID.randomUUID(),
            loginInfo = loginInfo,
            username = Some(signUpData.username),
            activated = true,
            avatarURL = None
          )

          val emp = Employe(
            _id = None,
            userId = user._id,
            areaId = signUpData.areaId,
            names = signUpData.names,
            lastName = signUpData.lastName,
            fullName = Some(signUpData.names + " " + signUpData.lastName),
            birthdate = signUpData.birthdate,
            sex = signUpData.sex,
            mobile = signUpData.mobile,
            active = true
          )

          for {
            avatar <- avatarService.retrieveURL(signUpData.username)
            user <- userService.save(user.copy(avatarURL = avatar))
            authInfo <- authInfoRepository.add(loginInfo, authInfo)
            authenticator <- silhouette.env.authenticatorService.create(loginInfo)
            token <- silhouette.env.authenticatorService.init(authenticator)
            employe <- employeesService.save(emp)
          } yield {
            silhouette.env.eventBus.publish(SignUpEvent(user, request))
            silhouette.env.eventBus.publish(LoginEvent(user, request))
            Ok(Json.toJson(employe))
          }
      }
    }.recoverTotal {
      case error =>
        Future.successful(Unauthorized(Json.obj("message" -> Messages("invalid.data"))))
    }

  }
}
