package db.dao.boxes.types

import javax.inject.Inject
import models.Pagination
import models.box.{BoxType}
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class BoxesTypesDAOImpl @Inject()(
                                   val reactiveMongoApi: ReactiveMongoApi
                                 ) extends BoxesTypesDAO {

  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("boxesTypes"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[BoxType]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[BoxType](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[BoxType]]())
    )
  }

  def save(boxType: BoxType): Future[BoxType] = {
    val doc = boxType.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def getOne(query: JsObject): Future[Option[BoxType]] = {
    collection.flatMap(_.find(query).one[BoxType])
  }
}
