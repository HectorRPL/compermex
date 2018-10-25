package db.dao.boxes

import models.Pagination
import models.box.Box
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait BoxesDAO {

  def getList(query: Option[JsObject], sort: Option[JsObject],
              pag: Pagination): Future[Seq[Box]]

  def getOne(_id: BSONObjectID): Future[Option[Box]]

  def save(box: Box): Future[Box]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: JsObject): Future[Unit]

}
