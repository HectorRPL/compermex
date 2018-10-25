package db.dao.materials

import models.material.{MaterialColor, MaterialStrength, MaterialType}

import scala.concurrent.Future

trait MaterialsDAO {

  def allTypes(): Future[Seq[MaterialType]]

  def allCollors(): Future[Seq[MaterialColor]]

  def allStrengths(): Future[Seq[MaterialStrength]]

}
