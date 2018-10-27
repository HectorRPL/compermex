package myservices.zipCodes

import models.zipCode.ZipCode

import scala.concurrent.Future

trait ZipCodesService {

  def getAll(): Future[Seq[ZipCode]]

  def save(zipCode: ZipCode): Future[ZipCode]
}
