package myservices.materials

import models.Pagination
import models.material.{Color, Strengths, Type}
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait MaterialsService {

  def getAllStrengths(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Strengths]]

  def getAllColors(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Color]]

  def getAllTypes(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Type]]
}