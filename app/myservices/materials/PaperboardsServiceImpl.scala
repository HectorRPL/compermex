package myservices.materials

import db.dao.materials.paperboards.PaperboardsDAO
import javax.inject.Inject
import models.Pagination
import models.material.Paperboard
import play.api.libs.json.JsObject
import reactivemongo.bson.BSONObjectID

import scala.concurrent.{ExecutionContext, Future}

class PaperboardsServiceImpl @Inject()(
                                        implicit ec: ExecutionContext,
                                        paperboardsDAO: PaperboardsDAO
                                      ) extends PaperboardsService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Paperboard]] = {

    paperboardsDAO.getList(query, sort, pag)
  }

  def count(query: JsObject): Future[Int] = {
    paperboardsDAO.count(query)
  }

  def save(paperboard: Paperboard): Future[Paperboard] = {
    paperboardsDAO.save(paperboard)
  }

  def getOne(_id: BSONObjectID): Future[Option[Paperboard]] = {
    paperboardsDAO.getOne(_id)
  }
}
