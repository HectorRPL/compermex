package db.dao.materials

import models.material.{Color, Strengths, Type}

import scala.concurrent.Future

trait MaterialsDAO {

  def allTypes(): Future[Seq[Type]]

  def allCollors(): Future[Seq[Color]]

  def allStrengths(): Future[Seq[Strengths]]

}
