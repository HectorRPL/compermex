package myservices.user

import java.util.UUID

import com.mohiva.play.silhouette.api.util.Clock
import db.dao.user.AuthTokenDAO
import javax.inject.Inject
import models.user.AuthToken
import org.joda.time.DateTimeZone
import play.api.libs.concurrent.Execution.Implicits._

import scala.concurrent.Future
import scala.concurrent.duration._

class AuthTokenServiceImpl @Inject()(
                                      authTokenDAO: AuthTokenDAO,
                                      clock: Clock)
  extends AuthTokenService {
  /**
    * Creates a new auth token and saves it in the backing store.
    *
    * @param userID The user ID for which the token should be created.
    * @param expiry The duration a token expires.
    * @return The saved auth token.
    */
  def create(userID: UUID, expiry: FiniteDuration): Future[AuthToken] = {
    val token = AuthToken(UUID.randomUUID(), userID, clock.now.withZone(
      DateTimeZone.UTC).plusSeconds(expiry.toSeconds.toInt)
    )

    authTokenDAO.save(token)

  }

  /**
    * Validates a token ID.
    *
    * @param id The token ID to validate.
    * @return The token if it's valid, None otherwise.
    */
  def validate(_id: UUID): Future[Option[AuthToken]] = authTokenDAO.findOne(_id)

  /**
    * Cleans expired tokens.
    *
    * @return The list of deleted tokens.
    */
  def clean: Future[Seq[AuthToken]] =  authTokenDAO.findExpired(clock.now.withZone(DateTimeZone.UTC)).flatMap { tokens =>
    Future.sequence(tokens.map { token =>
      authTokenDAO.remove(token._id).map(_ => token)
    })
  }
}
