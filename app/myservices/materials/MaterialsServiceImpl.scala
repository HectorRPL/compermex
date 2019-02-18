package myservices.materials

import models.Pagination
import models.material.{Color, Strengths, Type}
import db.dao.materials.MaterialsDAO
import javax.inject.Inject
import play.api.libs.json.JsObject

import scala.concurrent.{ExecutionContext, Future}

class MaterialsServiceImpl @Inject()(
                                       implicit ec: ExecutionContext,
                                       materialsDAO: MaterialsDAO
                                     ) extends MaterialsService {

  def getAllStrengths(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Strengths]] = {
    materialsDAO.allStrengths(query, sort, pag)
  }

  def getAllColors(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Color]] = {
    materialsDAO.allColors(query, sort, pag)
  }

  def getAllTypes(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Type]] = {
    materialsDAO.allTypes(query, sort, pag)
  }
}
