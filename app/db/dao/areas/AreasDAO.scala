package db.dao.areas

import models.Pagination
import models.area.Area
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait AreasDAO {

  def getList(query: Option[JsObject], sort: Option[JsObject],
              pag: Pagination): Future[Seq[Area]]
}
