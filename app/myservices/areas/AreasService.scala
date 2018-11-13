package myservices.areas

import models.area.Area
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait AreasService {

  def getAll(): Future[Seq[Area]]

  def getOne(_id: BSONObjectID): Future[Option[Area]]
}
