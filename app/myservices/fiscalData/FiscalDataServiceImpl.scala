package myservices.fiscalData

import db.dao.fiscalData.FiscalDataDAO
import javax.inject.Inject
import models.fiscalData.FiscalData

import scala.concurrent.{ExecutionContext, Future}


class FiscalDataServiceImpl @Inject()(
                                       implicit ec: ExecutionContext,
                                       fiscalDataDAO: FiscalDataDAO
                                     ) extends FiscalDataService {

  def save(fiscalData: FiscalData): Future[FiscalData] = {
    fiscalDataDAO.save(fiscalData)
  }
}
