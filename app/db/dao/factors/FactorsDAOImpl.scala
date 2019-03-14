package db.dao.factors

import javax.inject.Inject
import models.Pagination
import models.factor.Factor
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.Cursor
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONBatchCommands.AggregationFramework.{
  Limit, Lookup, Skip, UnwindField, Match, Sort, Ascending, Descending
}
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.{ExecutionContext, Future}

class FactorsDAOImpl @Inject()(
                                implicit ec: ExecutionContext,
                                val reactiveMongoApi: ReactiveMongoApi
                              ) extends FactorsDAO {
  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("factors"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Factor]] = {

    collection.flatMap(_.aggregatorContext[Factor](
      Lookup("types", "typeId", "_id", "materialType"),
      List(
        Lookup("boxesTypes", "boxTypeId", "_id", "boxType"),
        Lookup("strengths", "strengthId", "_id", "strength"),
        UnwindField("boxType"),
        UnwindField("materialType"),
        UnwindField("strength"),
        Match(
          query
        ),
        Skip(pag.skip),
        Limit(pag.limit),
        Sort(Descending("_id"))
      )
    ).prepared.cursor
      .collect[Seq](-1, Cursor.FailOnError[Seq[Factor]]()))

  }


  def count(query: JsObject): Future[Int] = {
    println(query)

    collection.flatMap(_.count(Some(query)))
  }

  def getOne(query: BSONDocument): Future[Option[Factor]] = {
    collection.flatMap(_.find(query).one[Factor])
  }

  def save(factor: Factor): Future[Factor] = {
    val doc = factor.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }

  def remove(_id: BSONObjectID): Future[Unit] = ???

  def update(query: JsObject, data: JsObject): Future[Unit] = ???

}
