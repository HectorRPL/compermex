package repositories.user

import java.util.UUID

import models.user.AuthToken
import org.joda.time.DateTime

import scala.concurrent.Future

trait AuthTokenRepo {

  /**
    * Finds a token by its ID.
    *
    * @param id The unique token ID.
    * @return The found token or None if no token for the given ID could be found.
    */
  def findOne(id: UUID): Future[Option[AuthToken]]

  /**
    * Finds expired tokens.
    *
    * @param dateTime The current date time.
    */
  def findExpired(dateTime: DateTime): Future[Seq[AuthToken]]

  /**
    * Saves a token.
    *
    * @param token The token to save.
    * @return The saved token.
    */
  def save(token: AuthToken): Future[AuthToken]

  /**
    * Removes the token for the given ID.
    *
    * @param id The ID for which the token should be removed.
    * @return A future to wait for the process to be completed.
    */
  def remove(id: UUID): Future[Unit]


}
