package models.user

import com.mohiva.play.silhouette.api.LoginInfo
import com.mohiva.play.silhouette.api.util.PasswordInfo
import play.api.libs.json.Json


case class PersistentPasswordInfo(loginInfo: LoginInfo, authInfo: PasswordInfo)

object PersistentPasswordInfo {

  implicit val passwordInfoFormat = Json.format[PasswordInfo]
  implicit val persistentPasswordInfoFormat = Json.format[PersistentPasswordInfo]

}
