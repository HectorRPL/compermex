package db.dao.zipCodes

import models.zipCode.ZipCode
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait ZipCodesDAO {

  def all(): Future[Seq[ZipCode]]

  def one(id: BSONObjectID): Future[Option[ZipCode]]

  def save(zipCode: ZipCode): Future[ZipCode]

  def remove(): Future[Unit]

  def update(): Future[Unit]

}
