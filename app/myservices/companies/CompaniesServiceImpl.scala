package myservices.companies

import db.dao.companies.CompaniesDAO
import javax.inject.Inject
import models.Pagination
import models.company.Company
import play.api.libs.json.JsObject

import scala.concurrent.{ExecutionContext, Future}

class CompaniesServiceImpl @Inject()(
                                      implicit ec: ExecutionContext,
                                      companiesDAO: CompaniesDAO
                                    ) extends CompaniesService {

  def getAll(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Company]] = {
    companiesDAO.getList(query, sort, pag)
  }

  def save(company: Company): Future[Company] = {
    companiesDAO.save(company)
  }
}
