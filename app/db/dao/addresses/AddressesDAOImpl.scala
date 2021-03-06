package db.dao.addresses

import javax.inject.Inject
import models.Pagination
import models.address.Address
import play.api.libs.json.{JsObject, Json}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class AddressesDAOImpl @Inject()(
                                  val reactiveMongoApi: ReactiveMongoApi
                                ) extends AddressesDAO {
  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("addresses"))

  def getList(query: BSONDocument, sort: JsObject,
              pag: Pagination): Future[Seq[Address]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Address](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Address]]())
    )
  }

  def getOne(query: BSONDocument): Future[Option[Address]] = {
    collection.flatMap(_.find(query).one[Address])
  }

  def save(address: Address): Future[Address] = {
    val doc = address.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(query: BSONDocument): Future[Unit] = ???

  def update(query: BSONDocument, data: BSONDocument): Future[Unit] = ???
}
