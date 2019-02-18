package db.dao.materials

import models.material.{Color, Strengths, Type}

import models.Pagination
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait MaterialsDAO {

  def allStrengths(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Strengths]]

  def allColors(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Color]]

  def allTypes(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Type]]

}
