package myservices.companies

import models.Pagination
import models.company.Company
import play.api.libs.json.JsObject

import scala.concurrent.Future

trait CompaniesService {


  def getAll(query: JsObject, sort: JsObject,
             pag: Pagination): Future[Seq[Company]]

  def save(company: Company): Future[Company]
}
