package models.user

import java.util.UUID

import com.mohiva.play.silhouette.api.{Identity, LoginInfo}
import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

/**
  *
  * @param _id
  * @param loginInfo
  * @param firstName
  * @param lastName
  * @param fullName
  * @param email
  * @param avatarURL
  * @param activated
  */
case class User(
                 _id: UUID,
                 loginInfo: LoginInfo,
                 username: Option[String],
                 avatarURL: Option[String],
                 activated: Boolean,
                 areaId: BSONObjectID
               ) extends Identity {

}

object User {
  implicit object UserReaders extends Reads[User] {

    def reads(json: JsValue): JsResult[User] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").as[UUID]
        val loginInfo = (obj \ "loginInfo").as[LoginInfo]
        val username = (obj \ "username").asOpt[String]
        val avatarURL = (obj \ "avatarURL").asOpt[String]
        val activated = (obj \ "activated").as[Boolean]
        val areaId = (obj \ "areaId").as[BSONObjectID]

        JsSuccess(User(_id, loginInfo, username, avatarURL, activated, areaId))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }

  }

  implicit object UserWriter extends OWrites[User] {
    def writes(user: User): JsObject = Json.obj(
      "_id" -> user._id,
      "loginInfo" -> user.loginInfo,
      "username" -> user.username,
      "avatarURL" -> user.avatarURL,
      "activated" -> user.activated,
      "areaId" -> user.areaId,
    )
  }
}
