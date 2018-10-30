package myservices.boxes

import db.dao.boxes.BoxesDAO
import javax.inject.Inject
import models.Pagination
import models.box.Box
import play.api.libs.json.Json

import scala.concurrent.{ExecutionContext, Future}

class BoxesServiceImpl  @Inject()(
                                   implicit ec: ExecutionContext,
                                   boxesDAO: BoxesDAO
                                 ){

  def getAll(): Future[Seq[Box]] = {
    val pag = Pagination(50, 1)
    val query = Json.obj()
    val sort = Json.obj()

    boxesDAO.getList(query, sort, pag)
  }

  def save(box: Box): Future[Box] = {
    boxesDAO.save(box)
  }

}
