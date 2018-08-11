package repositories

import javax.inject.Inject

import models.{League}
import reactivemongo.play.json._
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.BSONDocument
import reactivemongo.play.json.collection.JSONCollection
import models.LeagueJsonFormat._

import scala.concurrent.{ExecutionContext, Future}

// Declaramos el query y la conexión a la base
class LeaguesRepo @Inject()(
                             implicit ec: ExecutionContext,
                             reactiveMongoApi: ReactiveMongoApi
                           ) {

  def leaguesCollec: Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("leagues"))

  def getLeagues(): Future[Seq[League]] = {

    val query = BSONDocument()
    leaguesCollec.flatMap(_.find(query)
      .cursor[League](ReadPreference.primary)
      .collect[Seq](100, Cursor.FailOnError[Seq[League]]())
    )
  }

}
