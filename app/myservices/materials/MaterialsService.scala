package myservices.materials

import models.material.{Color, Strengths, Type}

import scala.concurrent.Future

trait MaterialsService {

  def getAllStrengths(): Future[Seq[Strengths]]

  def getAllColor(): Future[Seq[Color]]

  def getAllTypes(): Future[Seq[Type]]
}