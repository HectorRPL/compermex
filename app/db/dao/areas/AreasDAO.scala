package db.dao.areas

import models.Pagination
import models.area.Area
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait AreasDAO {

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Area]]
}
