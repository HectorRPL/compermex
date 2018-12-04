package db.dao.employees

import javax.inject.Inject
import models.Pagination
import models.employe.{Employe, EmployeInfo}
import play.api.libs.json.{JsObject, Json}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json.{collection, _}
import reactivemongo.play.json.collection.JSONCollection
import reactivemongo.play.json.commands.JSONAggregationFramework._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class EmployeesDAOImpl @Inject()(
                                  val reactiveMongoApi: ReactiveMongoApi
                                ) extends EmployeesDAO {
  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("employees"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Employe]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Employe](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Employe]]())
    )
  }

  def getOne(query: BSONDocument): Future[Option[Employe]] = {
    collection.flatMap(_.find(query).one[Employe])
  }

  def save(employe: Employe): Future[Employe] = {
    val doc = employe.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???

  def getListInfo(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[EmployeInfo]] = {

    collection.flatMap(_.aggregatorContext[EmployeInfo](
      Match(query),
      List(Lookup("areas", "areaId", "_id", "area"),
        Project(Json.obj("names" -> 0, "lastName" -> 0, "userId" -> 0, "areaId" -> 0, "active" -> 0)),
        UnwindField("area"),
        Skip(pag.skip),
        Limit(pag.limit)
      )
    ).prepared.cursor.collect[Seq](pag.limit, Cursor.FailOnError[Seq[EmployeInfo]]()))
  }

}
