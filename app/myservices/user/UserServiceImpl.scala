package myservices.user

import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import com.mohiva.play.silhouette.impl.providers.CommonSocialProfile
import db.dao.user.UserDAO
import javax.inject.Inject
import models.user.User

import scala.concurrent.{ExecutionContext, Future}

class UserServiceImpl @Inject()(
                                 implicit ec: ExecutionContext,
                                 userDao: UserDAO
                               ) extends UserService {
  /**
    * Retrieves a user that matches the specified ID.
    *
    * @param id The ID to retrieve a user.
    * @return The retrieved user or None if no user could be retrieved for the given ID.
    */
  def retrieve(id: UUID): Future[Option[User]] = userDao.findOne(id)

  /**
    * Saves a user.
    *
    * @param user The user to save.
    * @return The saved user.
    */
  def save(user: User): Future[User] = userDao.save(user)

  /**
    * Saves the social profile for a user.
    *
    * If a user exists for this profile then update the user, otherwise create a new user with the given profile.
    *
    * @param profile The social profile to save.
    * @return The user for whom the profile was saved.
    */
  def save(profile: CommonSocialProfile): Future[User] = {

    userDao.find(profile.loginInfo).flatMap {
      case Some(user) => // Update user with profile
        userDao.save(user.copy(
          username = profile.email,
          avatarURL = profile.avatarURL
        ))
      case None => // Insert a new user
        userDao.save(User(
          _id = UUID.randomUUID(),
          loginInfo = profile.loginInfo,
          username = profile.email,
          avatarURL = profile.avatarURL,
          activated = true
        ))
    }

  }

  def retrieve(loginInfo: LoginInfo): Future[Option[User]] = userDao.find(loginInfo)
}
