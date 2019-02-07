package myservices.materials

import db.dao.materials.MaterialsDAO
import javax.inject.Inject
import models.material.{Color, Strengths, Type}

import scala.concurrent.{ExecutionContext, Future}

class MatrerialsServiceImpl @Inject()(
                                       implicit ec: ExecutionContext,
                                       materialsDAO: MaterialsDAO
                                     ) extends MaterialsService {

  def getAllStrengths(): Future[Seq[Strengths]] = {
    materialsDAO.allStrengths()
  }

  def getAllColor(): Future[Seq[Color]] = {
    materialsDAO.allCollors()
  }

  def getAllTypes(): Future[Seq[Type]] = {
    materialsDAO.allTypes()
  }
}
