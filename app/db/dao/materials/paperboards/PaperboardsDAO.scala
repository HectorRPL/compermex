package db.dao.materials.paperboards

import models.Pagination
import models.material.Paperboard
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait PaperboardsDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Paperboard]]

  def count(query: JsObject): Future[Int]

  def getOne(_id: BSONObjectID): Future[Option[Paperboard]]

  def save(paperboard: Paperboard): Future[Paperboard]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: JsObject): Future[Unit]
}
