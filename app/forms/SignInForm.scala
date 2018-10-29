package forms

import play.api.data.Form
import play.api.data.Forms._
import play.api.libs.json.Json

object SignInForm {

  val form = Form(
    mapping(
      "username" -> email,
      "password" -> nonEmptyText,
      "rememberMe" -> boolean
    )(Data.apply)(Data.unapply)
  )

  case class Data(
                   username: String,
                   password: String,
                   rememberMe: Boolean
                 )

  object Data {

    /**
      * Converts the [Date] object to Json and vice versa.
      */
    implicit val jsonFormat = Json.format[Data]
  }

}
