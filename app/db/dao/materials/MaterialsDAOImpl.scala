package db.dao.materials

import javax.inject.Inject
import models.material.{Color, Strengths, Type, Paperboard}
import play.api.libs.json.Json
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
    reactiveMongoApi.database.map(_.collection("materialsStrengths"))

  def materTypes: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("materialsTypes"))

  def materColors: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("materialsColors"))

  def allTypes(): Future[Seq[Type]] = {
    val query = Json.obj()
    materTypes.flatMap(_.find(query)
      .cursor[Type](ReadPreference.primary)
      .collect[Seq](100, Cursor.FailOnError[Seq[Type]]())
    )
  }

  def allCollors(): Future[Seq[Color]] = {
    val query = Json.obj()
    materColors.flatMap(_.find(query)
      .cursor[Color](ReadPreference.primary)
      .collect[Seq](10, Cursor.FailOnError[Seq[Color]]())
    )
  }

  def allStrengths(): Future[Seq[Strengths]] = {
    val query = Json.obj()
    materStrength.flatMap(_.find(query)
      .cursor[Strengths](ReadPreference.primary)
      .collect[Seq](10, Cursor.FailOnError[Seq[Strengths]]())
    )
  }
}
