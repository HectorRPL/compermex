package myservices.areas

import models.area.Area

import scala.concurrent.Future

trait AreasService {

  def getAll(): Future[Seq[Area]]
}
