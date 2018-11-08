package myservices.materials

import models.Pagination
import models.material.Paperboard
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait PaperboardsService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Paperboard]]

  def save(employe: Paperboard): Future[Paperboard]

}
