package db.dao.clients

import models.Pagination
import models.client.Client
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

trait ClientsDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Client]]

  def getOne(_id: BSONObjectID): Future[Option[Client]]

  def save(client: Client): Future[Client]

  def remove(_id: BSONObjectID): Future[Unit]

  def update(query: JsObject, data: JsObject): Future[Unit]
}
