package db.dao.boxes.types

import models.Pagination
import models.box.{BoxType}
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait BoxesTypesDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[BoxType]]

  def save(boxType: BoxType): Future[BoxType]

  def getOne(query: JsObject): Future[Option[BoxType]]

}
