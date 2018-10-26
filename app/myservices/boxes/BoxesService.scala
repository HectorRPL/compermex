package myservices.boxes

import models.box.Box

import scala.concurrent.Future

trait BoxesService {
  def getAll(): Future[Seq[Box]]

  def save(box: Box): Future[Box]

}
