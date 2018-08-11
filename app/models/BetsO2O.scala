package models

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

case class BetsO2O(
                    _id:              Option[BSONObjectID],
                    matchId:          String,
                    matchApiId:       String,
                    creatorUserId:    String,
                    oponentUserId:    Option[String],
                    winnerId:         Option[String],
                    amountCreator:    Int,
                    amountOponent:    Option[Int],
                    forecastCreator:  String,
                    forecastOponent:  Option[String],
                    result:           Option[String],
                    creationDate:     String
                  )
object BetsO2OJsonFormat {

  import play.api.libs.json._

  implicit val matchesFormat: OFormat[BetsO2O] = Json.format[BetsO2O]
}