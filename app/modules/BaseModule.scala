package modules

import com.google.inject.AbstractModule
import db.dao.addresses.{AddressesDAO, AddressesDAOImpl}
import db.dao.areas.{AreasDAO, AreasDAOImpl}
import db.dao.boxes.sizes.{BoxesSizesDAO, BoxesSizesDAOImpl}
import db.dao.boxes.types.{BoxesTypesDAO, BoxesTypesDAOImpl}
import db.dao.boxes.{BoxesDAO, BoxesDAOImpl}
import db.dao.clients.{ClientsDAO, ClientsDAOImpl}
import db.dao.companies.{CompaniesDAO, CompaniesDAOImpl}
import db.dao.employees.{EmployeesDAO, EmployeesDAOImpl}
import db.dao.factors.{FactorsDAO, FactorsDAOImpl}
import db.dao.fiscalData.{FiscalDataDAO, FiscalDataDAOImpl}
import db.dao.materials.paperboards.{PaperboardsDAO, PaperboardsDAOImpl}
import db.dao.materials.{MaterialsDAO, MaterialsDAOImpl}
import db.dao.purchases.{PurchasesOrdersDAO, PurchasesOrdersDAOImpl}
import db.dao.sales.{SalesOrdersDAO, SalesOrdersDAOImpl}
import db.dao.suppliers.{SuppliersDAO, SuppliersDAOImpl, SuppliersInfoDAO, SuppliersInfoDAOImpl}
import db.dao.user.{AuthTokenDAO, AuthTokenDAOImpl}
import db.dao.zipCodes.{ZipCodesDAO, ZipCodesDAOImpl}
import myservices.addresses.{AddressesService, AddressesServiceImpl}
import myservices.areas.{AreasService, AreasServiceImpl}
import myservices.boxes.{BoxesService, BoxesServiceImpl}
import myservices.clients.{ClientsService, ClientsServiceImpl}
import myservices.companies.{CompaniesService, CompaniesServiceImpl}
import myservices.employees.{EmployeesService, EmployeesServiceImpl}
import myservices.factors.{FactorsService, FactorsServiceImpl}
import myservices.fiscalData.{FiscalDataService, FiscalDataServiceImpl}
import myservices.materials.{MaterialsService, MaterialsServiceImpl, PaperboardsService, PaperboardsServiceImpl}
import myservices.purchases.{PurchasesService, PurchasesServiceImpl}
import myservices.sales.{SalesService, SalesServiceImpl}
import myservices.suppliers.{SuppliersInfoService, SuppliersInfoServiceImpl, SuppliersService, SuppliersServiceImpl}
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
    bind[SuppliersInfoService].to[SuppliersInfoServiceImpl]
    bind[SuppliersInfoDAO].to[SuppliersInfoDAOImpl]

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
    bind[MaterialsService].to[MaterialsServiceImpl]
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

    // DI for Boxes
    bind[BoxesService].to[BoxesServiceImpl]
    bind[BoxesDAO].to[BoxesDAOImpl]
    bind[BoxesTypesDAO].to[BoxesTypesDAOImpl]
    bind[BoxesSizesDAO].to[BoxesSizesDAOImpl]

    //DI for Address
    bind[AddressesService].to[AddressesServiceImpl]
    bind[AddressesDAO].to[AddressesDAOImpl]

    //DI for Orders
    bind[SalesService].to[SalesServiceImpl]
    bind[SalesOrdersDAO].to[SalesOrdersDAOImpl]
    bind[PurchasesService].to[PurchasesServiceImpl]
    bind[PurchasesOrdersDAO].to[PurchasesOrdersDAOImpl]

    //DI for Fiscal Data
    bind[FiscalDataService].to[FiscalDataServiceImpl]
    bind[FiscalDataDAO].to[FiscalDataDAOImpl]

    //DI For factors
    bind[FactorsService].to[FactorsServiceImpl]
    bind[FactorsDAO].to[FactorsDAOImpl]
  }
}
