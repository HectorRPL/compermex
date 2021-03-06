package utils.auth

import com.mohiva.play.silhouette.api.Env
import com.mohiva.play.silhouette.impl.authenticators.JWTAuthenticator
import models.user.User

trait DefaultEnv extends Env{

  type I = User
  type A = JWTAuthenticator

}
