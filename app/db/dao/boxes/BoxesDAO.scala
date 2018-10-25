package db.dao.boxes

import models.box.Box
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait BoxesDAO {


  def all(): Future[Seq[Box]]

  def one(id: BSONObjectID): Future[Option[Box]]

  def save(zipCode: Box): Future[Box]

  def remove(): Future[Unit]

  def update(): Future[Unit]


}
