package myservices.clients

import models.Pagination
import models.client.Client
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait ClientsService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Client]]

  def save(client: Client): Future[Client]


}