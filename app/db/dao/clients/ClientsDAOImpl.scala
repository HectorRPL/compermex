package db.dao.clients
import javax.inject.Inject
import models.Pagination
import models.client.Client
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json.collection.JSONCollection
import reactivemongo.play.json._
import scala.concurrent.{ExecutionContext, Future}

class ClientsDAOImpl @Inject()(
                                implicit ec: ExecutionContext,
                                val reactiveMongoApi: ReactiveMongoApi
                              )extends ClientsDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("clients"))

  def getList(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Client]] = {
    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Client](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Client]]())
    )
  }

  def getOne(_id: BSONObjectID): Future[Option[Client]] = {
    val query = BSONDocument("_id" -> _id)
    collection.flatMap(_.find(query).one[Client])
  }

  def save(client: Client): Future[Client] = {
    val doc = client.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???

  def count(query: JsObject): Future[Int] = {
    collection.flatMap(_.count(Some(query)))
  }
}
