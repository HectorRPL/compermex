package db.dao.materials

import models.material.{MaterialColor, MaterialStrengths, MaterialType}

import scala.concurrent.Future

trait MaterialsDAO {

  def allTypes(): Future[Seq[MaterialType]]

  def allCollors(): Future[Seq[MaterialColor]]

  def allStrengths(): Future[Seq[MaterialStrengths]]

}
