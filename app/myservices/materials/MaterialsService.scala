package myservices.materials

import models.material.{MaterialColor, MaterialStrengths, MaterialType}

import scala.concurrent.Future

trait MaterialsService {

  def getAllStrengths(): Future[Seq[MaterialStrengths]]

  def getAllColor(): Future[Seq[MaterialColor]]

  def getAllTypes(): Future[Seq[MaterialType]]
}