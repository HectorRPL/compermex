package myservices.areas

import db.dao.areas.AreasDAO
import javax.inject.Inject
import models.Pagination
import models.area.Area
import play.api.libs.json.Json
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.{ExecutionContext, Future}

class AreasServiceImpl  @Inject()(
                                  implicit ec: ExecutionContext,
                                  areasDAO: AreasDAO
                                )extends AreasService {

  def getAll(): Future[Seq[Area]] = {
    val pag = Pagination(50, 1)
    val query = Json.obj()
    val sort = Json.obj()

    areasDAO.getList(query, sort, pag)
  }

  def getOne(query: BSONDocument): Future[Option[Area]] = {
    areasDAO.getOne(query)
  }
}
