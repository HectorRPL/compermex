package models.user

import java.util.UUID

import org.joda.time.DateTime
import play.api.libs.json._

case class AuthToken(
                      id: UUID,
                      userId: UUID,
                      expiry: DateTime
                    ) {

}

object AuthToken {
  implicit val jsonFormat = Json.format[AuthToken]
}