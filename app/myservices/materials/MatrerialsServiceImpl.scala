package myservices.materials

import db.dao.materials.MaterialsDAO
import javax.inject.Inject
import models.material.{MaterialColor, MaterialStrengths, MaterialType}

import scala.concurrent.{ExecutionContext, Future}

class MatrerialsServiceImpl @Inject()(
                                       implicit ec: ExecutionContext,
                                       materialsDAO: MaterialsDAO
                                     ) extends MaterialsService {

  def getAllStrengths(): Future[Seq[MaterialStrengths]] = {
    materialsDAO.allStrengths()
  }

  def getAllColor(): Future[Seq[MaterialColor]] = {
    materialsDAO.allCollors()
  }

  def getAllTypes(): Future[Seq[MaterialType]] = {
    materialsDAO.allTypes()
  }
}
