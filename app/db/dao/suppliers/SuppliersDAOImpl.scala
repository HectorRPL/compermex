package db.dao.suppliers

import javax.inject.Inject
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

  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("suppliers"))

  def all(): Future[Seq[Supplier]] = {
    val query = Json.obj()
    collection.flatMap(_.find(query)
        .cursor[Supplier](ReadPreference.primary)
        .collect[Seq](10, Cursor.FailOnError[Seq[Supplier]]())
    )
  }

  def one(id: BSONObjectID): Future[Option[Supplier]] = {
    val query = BSONDocument("_id" -> id)
    collection.flatMap(_.find(query).one[Supplier])
  }

  def save(supplier: Supplier): Future[Supplier] = {
    collection.flatMap(_.insert(supplier))
  }

  def remove(): Future[Unit] = ???

  def update(): Future[Unit] = ???
}
