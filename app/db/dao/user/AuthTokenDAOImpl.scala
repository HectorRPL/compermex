package db.dao.user

import java.util.UUID

import javax.inject._
import models.user.AuthToken
import org.joda.time.DateTime
import play.api.libs.json._
import play.modules.reactivemongo._
import play.modules.reactivemongo.json._
import reactivemongo.api._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class AuthTokenDAOImpl @Inject()(
                                   val reactiveMongoApi: ReactiveMongoApi
                                 )
  extends AuthTokenDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("silhouette.token"))

  /**
    * Finds a token by its ID.
    *
    * @param id The unique token ID.
    * @return The found token or None if no token for the given ID could be found.
    */
  def findOne(id: UUID): Future[Option[AuthToken]] = {
    val query = Json.obj("_id" -> id)
    collection.flatMap(_.find(query).one[AuthToken])

  }

  /**
    * Finds expired tokens.
    *
    * @param dateTime The current date time.
    */
  def findExpired(dateTime: DateTime): Future[Seq[AuthToken]] = {
    val query = Json.obj("expiry" ->
      Json.obj("$lt" -> ""))
    collection.flatMap(_.find(query)
      .cursor[AuthToken](ReadPreference.primary)
      .collect[Seq](100, Cursor.FailOnError[Seq[AuthToken]]()))
  }

  /**
    * Saves a token.
    *
    * @param token The token to save.
    * @return The saved token.
    */
  def save(token: AuthToken): Future[AuthToken] = {
    collection.flatMap(_.insert(token))
    Future.successful(token)
  }

  /**
    * Removes the token for the given ID.
    *
    * @param id The ID for which the token should be removed.
    * @return A future to wait for the process to be completed.
    */
  def remove(id: UUID): Future[Unit] = {
    val query = Json.obj("_id" -> id)
    collection.flatMap(_.remove(query))
    Future.successful(())
  }
}
