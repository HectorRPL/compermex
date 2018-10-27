package myservices.zipCodes

import db.dao.zipCodes.ZipCodesDAO
import javax.inject.Inject
import models.Pagination
import models.zipCode.ZipCode
import play.api.libs.json.Json

import scala.concurrent.{ExecutionContext, Future}

class ZipCodesServiceImpl @Inject()(
                                     implicit ec: ExecutionContext,
                                     zipCodesDAO: ZipCodesDAO
                                   ) extends ZipCodesService {

  def getAll(): Future[Seq[ZipCode]] = {
    val pag = Pagination(50, 1)
    val query = Some(Json.obj())
    val sort = Some(Json.obj())

    zipCodesDAO.getList(query, sort, pag)
  }

  def save(zipCode: ZipCode): Future[ZipCode] = {
    zipCodesDAO.save(zipCode)
  }

}
