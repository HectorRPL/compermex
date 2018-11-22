package myservices.fiscalData

import models.fiscalData.FiscalData

import scala.concurrent.Future

trait FiscalDataService {

  def save(fiscalData: FiscalData): Future[FiscalData]
}
