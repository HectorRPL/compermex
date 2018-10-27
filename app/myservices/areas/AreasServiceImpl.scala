package myservices.areas

import models.area.Area

import scala.concurrent.Future

trait AreasServiceImpl {

  def getAll(): Future[Seq[Area]]
}
