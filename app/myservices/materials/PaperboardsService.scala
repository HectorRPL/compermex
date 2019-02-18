package myservices.materials

import models.Pagination
import models.material.Paperboard
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait PaperboardsService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Paperboard]]

  def save(paperboard: Paperboard): Future[Paperboard]

  def getOne(_id: BSONObjectID): Future[Option[Paperboard]]

}
