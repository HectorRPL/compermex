package db.dao.employees

import javax.inject.Inject
import models.Pagination
import models.employe.Employe
import play.api.libs.json.{JsObject, Json}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json.{collection, _}
import reactivemongo.play.json.collection.JSONCollection

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

  /*def aggregation(): Future[Seq[Employe]] = {
    import collection.JSONBatchCommands.AggregationFramework.{Lookup, Limit, Skip}

    collection.flatMap(_.aggregate(
      Lookup("areas", "areaId", "_id", "area"),
      List(

      )
    )
    collection.flatMap(_.aggregate(
      Lookup("areas", "areaId", "_id", "area")).flatMap(
      _.cursor[Employe](ReadPreference.primary))
    )
  }*/
}
