package myservices.zipCodes

import db.dao.zipCodes.ZipCodesDAO
import javax.inject.Inject
import models.Pagination
import models.zipCode.ZipCode
import play.api.libs.json.{JsObject, Json}

import scala.concurrent.{ExecutionContext, Future}

class ZipCodesServiceImpl @Inject()(
                                     implicit ec: ExecutionContext,
                                     zipCodesDAO: ZipCodesDAO
                                   ) extends ZipCodesService {

  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[ZipCode]] = {

    zipCodesDAO.getList(query, sort, pag)
  }

  def save(zipCode: ZipCode): Future[ZipCode] = {
    zipCodesDAO.save(zipCode)
  }

}
