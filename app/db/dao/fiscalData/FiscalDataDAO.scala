package db.dao.fiscalData

import models.fiscalData.FiscalData

import scala.concurrent.Future

trait FiscalDataDAO {

  def save(fiscalData: FiscalData): Future[FiscalData]

}
