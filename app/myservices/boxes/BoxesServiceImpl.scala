package myservices.boxes

import db.dao.boxes.BoxesDAO
import db.dao.boxes.sizes.BoxesSizesDAO
import db.dao.boxes.types.BoxesTypesDAO
import javax.inject.Inject
import models.Pagination
import models.box.{Box, BoxSize, BoxType}
import play.api.libs.json.{JsObject, Json}
import reactivemongo.bson.BSONObjectID

import scala.concurrent.{ExecutionContext, Future}

class BoxesServiceImpl  @Inject()(
                                   implicit ec: ExecutionContext,
                                   boxesDAO: BoxesDAO,
                                   boxesTypesDAO: BoxesTypesDAO,
                                   boxesSizesDAO: BoxesSizesDAO
                                 ) extends  BoxesService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Box]] = {

    boxesDAO.getList(query, sort, pag)
  }

  def save(box: Box): Future[Box] = {

    boxesDAO.save(box)
  }

  def getBoxeTypes(query: JsObject, sort: JsObject,
                   pag: Pagination): Future[Seq[BoxType]] = {

    boxesTypesDAO.getList(query, sort, pag)
  }

  def saveBoxSize(boxSize: BoxSize): Future[BoxSize] = {
    boxesSizesDAO.saveBoxSize(boxSize)
  }

  def getOneBox(_id: BSONObjectID): Future[Option[Box]] = {
    boxesDAO.getOne(_id)
  }

}
