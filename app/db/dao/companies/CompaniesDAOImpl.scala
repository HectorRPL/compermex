package db.dao.companies

import javax.inject.Inject
import models.Pagination
import models.company.Company
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.{ExecutionContext, Future}

class CompaniesDAOImpl @Inject()(
                                implicit ec: ExecutionContext,
                                val reactiveMongoApi: ReactiveMongoApi
                              ) extends CompaniesDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("companies"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Company]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Company](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Company]]())
    )
  }

  def getOne(id: BSONObjectID): Future[Option[Company]] = {
    val query = BSONDocument("_id" -> id)
    collection.flatMap(_.find(query).one[Company])
  }

  def save(company: Company): Future[Company] = {
    val doc = company.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???
}
