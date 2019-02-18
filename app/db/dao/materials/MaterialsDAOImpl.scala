package db.dao.materials

import javax.inject.Inject
import models.Pagination
import models.material.{Color, Strengths, Type, Paperboard}
import play.api.libs.json.Json
import play.api.libs.json.JsObject
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class MaterialsDAOImpl @Inject()(
                                  val reactiveMongoApi: ReactiveMongoApi
                                ) extends MaterialsDAO {
  def materStrength: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("strengths"))

  def materColors: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("colors"))

  def materTypes: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("types"))

  def allStrengths(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Strengths]] = {
    materStrength.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Strengths](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Strengths]]())
    )
  }

  def allColors(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Color]] = {
    materColors.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Color](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Color]]())
    )
  }

  def allTypes(query: JsObject, sort: JsObject, pag: Pagination): Future[Seq[Type]] = {
    materTypes.flatMap(_.find(query)
      .skip(pag.skip)
      .sort(sort)
      .cursor[Type](ReadPreference.primary)
      .collect[Seq](pag.limit, Cursor.FailOnError[Seq[Type]]())
    )
  }
}
