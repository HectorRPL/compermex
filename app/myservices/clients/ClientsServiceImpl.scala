package myservices.clients

import db.dao.clients.ClientsDAO
import javax.inject.Inject
import models.Pagination
import models.client.Client
import play.api.libs.json.JsObject

import scala.concurrent.{ExecutionContext, Future}

class ClientsServiceImpl @Inject()(
                                    implicit ec: ExecutionContext,
                                    clientsDAO: ClientsDAO,
                                  ) extends ClientsService {

  def getAll(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Client]] = {
    clientsDAO.getList(query, sort, pag)
  }

  def save(client: Client): Future[Client] = {
    clientsDAO.save(client)
  }
}
