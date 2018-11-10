package db.dao.boxes.sizes

import models.box.BoxSize

import scala.concurrent.Future

trait BoxesSizesDAO {

  def saveBoxSize(boxSize: BoxSize): Future[BoxSize]
}
