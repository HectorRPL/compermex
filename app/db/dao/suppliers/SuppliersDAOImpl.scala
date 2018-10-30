package db.dao.suppliers

import javax.inject.Inject
import models.Pagination
import models.supplier.Supplier
import play.api.libs.json._
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class SuppliersDAOImpl @Inject()(
                                  val reactiveMongoApi: ReactiveMongoApi
                                ) extends SuppliersDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("suppliers"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Supplier]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Supplier](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Supplier]]())
    )
  }

  def getOne(id: BSONObjectID): Future[Option[Supplier]] = {
    val query = BSONDocument("_id" -> id)
    collection.flatMap(_.find(query).one[Supplier])
  }

  def save(supplier: Supplier): Future[Supplier] = {
    val doc = supplier.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???
}
