package modules

import com.google.inject.AbstractModule
import db.dao.areas.{AreasDAO, AreasDAOImpl}
import db.dao.clients.{ClientsDAO, ClientsDAOImpl}
import db.dao.companies.{CompaniesDAO, CompaniesDAOImpl}
import db.dao.employees.{EmployeesDAO, EmployeesDAOImpl}
import db.dao.materials.paperboards.{PaperboardsDAO, PaperboardsDAOImpl}
import db.dao.materials.{MaterialsDAO, MaterialsDAOImpl}
import db.dao.suppliers.{SuppliersDAO, SuppliersDAOImpl}
import db.dao.user.{AuthTokenDAO, AuthTokenDAOImpl}
import db.dao.zipCodes.{ZipCodesDAO, ZipCodesDAOImpl}
import myservices.areas.{AreasService, AreasServiceImpl}
import myservices.clients.{ClientsService, ClientsServiceImpl}
import myservices.companies.{CompaniesService, CompaniesServiceImpl}
import myservices.employees.{EmployeesService, EmployeesServiceImpl}
import myservices.materials.{MaterialsService, MatrerialsServiceImpl, PaperboardsService, PaperboardsServiceImpl}
import myservices.suppliers.{SuppliersService, SuppliersServiceImpl}
import net.codingwell.scalaguice.ScalaModule
import myservices.user.{AuthTokenService, AuthTokenServiceImpl}
import myservices.zipCodes.{ZipCodesService, ZipCodesServiceImpl}

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

    //DI for Areas
    bind[AreasService].to[AreasServiceImpl]
    bind[AreasDAO].to[AreasDAOImpl]

    //DI for ZIP CODES
    bind[ZipCodesService].to[ZipCodesServiceImpl]
    bind[ZipCodesDAO].to[ZipCodesDAOImpl]

    //DI for Materials
    bind[MaterialsService].to[MatrerialsServiceImpl]
    bind[MaterialsDAO].to[MaterialsDAOImpl]

    //DI for Clients
    bind[ClientsService].to[ClientsServiceImpl]
    bind[ClientsDAO].to[ClientsDAOImpl]

    //DI for Companies
    bind[CompaniesService].to[CompaniesServiceImpl]
    bind[CompaniesDAO].to[CompaniesDAOImpl]

    //DI for paperboard
    bind[PaperboardsService].to[PaperboardsServiceImpl]
    bind[PaperboardsDAO].to[PaperboardsDAOImpl]

  }
}
