package models

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

case class Matches(
                    _id:            Option[BSONObjectID],
                    apiMatchId:     String,
                    home:           String,
                    away:           String,
                    status:         Option[String],
                    scoreHome:      String,
                    scoreAway:      String,
                    result:         Option[String],
                    matchStartDate: String
                  )
object MatchesJsonFormat {

  import play.api.libs.json._

  implicit val matchesFormat: OFormat[Matches] = Json.format[Matches]
}