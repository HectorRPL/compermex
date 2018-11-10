package myservices.boxes

import models.Pagination
import models.box.{Box, BoxSize, BoxType}
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait BoxesService {
  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Box]]

  def save(box: Box): Future[Box]

  def getBoxeTypes(query: JsObject, sort: JsObject,
                   pag: Pagination): Future[Seq[BoxType]]

  def saveBoxSize(boxSize: BoxSize): Future[BoxSize]

}
