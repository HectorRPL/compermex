package modules

import com.google.inject.AbstractModule
import db.dao.employees.{EmployeesDAO, EmployeesDAOImpl}
import db.dao.suppliers.{SuppliersDAO, SuppliersDAOImpl}
import db.dao.user.{AuthTokenDAO, AuthTokenDAOImpl}
import myservices.employees.{EmployeesService, EmployeesServiceImpl}
import myservices.suppliers.{SuppliersService, SuppliersServiceImpl}
import net.codingwell.scalaguice.ScalaModule
import myservices.user.{AuthTokenService, AuthTokenServiceImpl}

/**
 * The base Guice module.
 */
class BaseModule extends AbstractModule with ScalaModule {

  /**
   * Configures the module.
   */
  override def configure(): Unit = {
    bind[AuthTokenDAO].to[AuthTokenDAOImpl]
    bind[AuthTokenService].to[AuthTokenServiceImpl]
    bind[SuppliersDAO].to[SuppliersDAOImpl]
    bind[SuppliersService].to[SuppliersServiceImpl]

    //DI for employees
    bind[EmployeesService].to[EmployeesServiceImpl]
    bind[EmployeesDAO].to[EmployeesDAOImpl]

  }
}
