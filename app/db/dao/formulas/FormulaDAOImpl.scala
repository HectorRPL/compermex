package db.dao.formulas

import javax.inject.Inject
import models.Pagination
import models.formula.Formula
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.BSONDocument
import reactivemongo.play.json.collection.JSONCollection
import reactivemongo.play.json._

import scala.concurrent.{ExecutionContext, Future}

class FormulaDAOImpl @Inject()(
                                implicit ec: ExecutionContext,
                                val reactiveMongoApi: ReactiveMongoApi
                              )extends FormulaDAO {

  def collection: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("formulas"))

  def getList(query: JsObject, sort: JsObject,
              pag: Pagination): Future[Seq[Formula]] = {

    collection.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Formula](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Formula]]())
    )
  }

  def getOne(query: BSONDocument): Future[Option[Formula]] = {
    collection.flatMap(_.find(query).one[Formula])
  }
}
