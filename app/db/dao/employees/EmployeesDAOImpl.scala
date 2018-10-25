package db.dao.employees

import javax.inject.Inject
import models.Pagination
import models.employe.Employe
import play.api.libs.json.{JsObject, Json}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class EmployeesDAOImpl @Inject()(
                                  val reactiveMongoApi: ReactiveMongoApi
                                ) extends EmployeesDAO {
  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("employees"))

  def getList(query: Option[JsObject], sort: Option[JsObject],
              pag: Pagination): Future[Seq[Employe]] = {
    val query = Json.obj()
    val sort = Json.obj()
    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Employe](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Employe]]())
    )
  }

  def getOne(_id: BSONObjectID): Future[Option[Employe]] = {
    val query = BSONDocument("_id" -> id)
    collection.flatMap(_.find(query).one[Employe])
  }

  def save(employe: Employe): Future[Employe] = {
    val doc = employe.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???
}
