package myservices.areas

import models.area.Area
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.Future

trait AreasService {

  def getAll(): Future[Seq[Area]]

  def getOne(query: BSONDocument): Future[Option[Area]]
}
