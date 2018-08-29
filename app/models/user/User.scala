package models.user

import java.util.UUID

import com.mohiva.play.silhouette.api.{Identity, LoginInfo}
import play.api.libs.json._

/**
  *
  * @param userID
  * @param loginInfo
  * @param firstName
  * @param lastName
  * @param fullName
  * @param email
  * @param avatarURL
  * @param activated
  */
case class User(
                 userID: UUID,
                 loginInfo: LoginInfo,
                 firstName: Option[String],
                 lastName: Option[String],
                 fullName: Option[String],
                 email: Option[String],
                 avatarURL: Option[String],
                 activated: Boolean
               ) extends Identity {

}

object User {
  implicit val jsonFormat = Json.format[User]
}
