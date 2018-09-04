package repositories.user

import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import javax.inject.Inject
import models.user.User
import play.api.libs.json._
import play.modules.reactivemongo.ReactiveMongoApi
import play.modules.reactivemongo.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future


class UserRepoImpl @Inject() (val reactiveMongoApi: ReactiveMongoApi) extends UserRepo {

  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("silhouette.user"))

  /**
    * Finds a user by its login info.
    *
    * @param loginInfo The login info of the user to find.
    * @return The found user or None if no user for the given login info could be found.
    */
  def find(loginInfo: LoginInfo): Future[Option[User]] = {
    val query = Json.obj("loginInfo" -> loginInfo)
    collection.flatMap(_.find(query).one[User])
  }

  /**
    * Finds a user by its user ID.
    *
    * @param userID The ID of the user to find.
    * @return The found user or None if no user for the given ID could be found.
    */
  def findOne(userID: UUID): Future[Option[User]] = {
    val query = Json.obj("userID" -> userID)
    collection.flatMap(_.find(query).one[User])
  }

  /**
    * Saves a user.
    *
    * @param user The user to save.
    * @return The saved user.
    */
  def save(user: User): Future[User] = {
    val query = Json.obj("userID" -> user.userID)
    collection.flatMap(_.update(query, user, upsert = true))
    Future.successful(user)
  }

}