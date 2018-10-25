package myservices.materials

import models.material.{MaterialColor, MaterialStrength, MaterialType}

import scala.concurrent.Future

trait MaterialsService {

  def getAllStrengths(): Future[Seq[MaterialStrength]]

  def getAllColor(): Future[Seq[MaterialColor]]

  def getAllTypes(): Future[Seq[MaterialType]]
}