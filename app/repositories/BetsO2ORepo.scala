package repositories

import javax.inject.Inject
import models.BetsO2O
import models.BetsO2OJsonFormat._
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.commands.WriteResult
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.BSONDocument
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.{ExecutionContext, Future}

class BetsO2ORepo @Inject()(
                              implicit ec: ExecutionContext,
                              reactiveMongoApi: ReactiveMongoApi
                            ) {

  def betsO2OCollec : Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("betsO2O"))

  def addBetO2O(betO2O: BetsO2O): Future[WriteResult] = {
    betsO2OCollec.flatMap(_.insert(betO2O))
  }

}
