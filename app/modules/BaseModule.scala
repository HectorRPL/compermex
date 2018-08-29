package modules

import com.google.inject.AbstractModule
import net.codingwell.scalaguice.ScalaModule
import repositories.user.{AuthTokenRepo, AuthTokenRepoImpl}
import services.user.{AuthTokenService, AuthTokenServiceImpl}
import services.user.user.AuthTokenService

/**
 * The base Guice module.
 */
class BaseModule extends AbstractModule with ScalaModule {

  /**
   * Configures the module.
   */
  override def configure(): Unit = {
    bind[AuthTokenRepo].to[AuthTokenRepoImpl]
    bind[AuthTokenService].to[AuthTokenServiceImpl]
  }
}
