package db.dao.materials

import javax.inject.Inject
import models.material.{MaterialColor, MaterialStrengths, MaterialType, Paperboard}
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

  def allTypes(): Future[Seq[MaterialType]] = {
    val query = Json.obj()
    materTypes.flatMap(_.find(query)
      .cursor[MaterialType](ReadPreference.primary)
      .collect[Seq](100, Cursor.FailOnError[Seq[MaterialType]]())
    )
  }

  def allCollors(): Future[Seq[MaterialColor]] = {
    val query = Json.obj()
    materColors.flatMap(_.find(query)
      .cursor[MaterialColor](ReadPreference.primary)
      .collect[Seq](10, Cursor.FailOnError[Seq[MaterialColor]]())
    )
  }

  def allStrengths(): Future[Seq[MaterialStrengths]] = {
    val query = Json.obj()
    materStrength.flatMap(_.find(query)
      .cursor[MaterialStrengths](ReadPreference.primary)
      .collect[Seq](10, Cursor.FailOnError[Seq[MaterialStrengths]]())
    )
  }
}
