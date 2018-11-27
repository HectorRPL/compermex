package db.dao.zipCodes

import javax.inject.Inject
import models.Pagination
import models.zipCode.ZipCode
import play.api.libs.json.{JsObject, Json}
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class ZipCodesDAOImpl @Inject()(
                                val reactiveMongoApi: ReactiveMongoApi
                              ) extends ZipCodesDAO {
  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("zipCodes"))

  def getList(query: BSONDocument, sort: JsObject,
              pag: Pagination): Future[Seq[ZipCode]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[ZipCode](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[ZipCode]]())
    )
  }


  def getOne(query: BSONDocument): Future[Option[ZipCode]]  = {
    collection.flatMap(_.find(query).one[ZipCode])
  }


  def save(zipCode: ZipCode): Future[ZipCode]  ={
    val doc = zipCode.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }


  def remove(query: BSONDocument): Future[Unit] = ???


  def update(query: BSONDocument, data: BSONDocument): Future[Unit] = ???
}
