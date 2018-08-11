package repositories

import java.util.Calendar

import javax.inject.Inject
import models.Matches
import models.MatchesJsonFormat._
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.commands.WriteResult
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDateTime, BSONDocument}
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.{ExecutionContext, Future}

class MatchesRepo @Inject()(
                              implicit ec: ExecutionContext,
                              reactiveMongoApi: ReactiveMongoApi
                            ) {

  def matchesCollec : Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("matches"))

  def getMatches(): Future[Seq[Matches]] ={

    val query = BSONDocument()
    matchesCollec.flatMap(_.find(query)
      .cursor[Matches](ReadPreference.primary)
      .collect[Seq](100, Cursor.FailOnError[Seq[Matches]]())
    )
  }



  def addMatch(mAtch: Matches): Future[WriteResult] = {
    matchesCollec.flatMap(_.insert(mAtch))
  }

  def getEndMatches(): Future[Seq[Matches]] = {

    val dateTime = Calendar.getInstance().getTimeInMillis();
    val query = BSONDocument("" -> BSONDocument("$lte" -> BSONDateTime(dateTime)))
    matchesCollec.flatMap(_.find(query)
      .cursor[Matches](ReadPreference.primary)
      .collect[Seq](100, Cursor.FailOnError[Seq[Matches]]())
    )
  }

}
