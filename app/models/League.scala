package models

import java.util.Date

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

case class League(
                    _id: Option[BSONObjectID],
                    countryId: BSONObjectID,
                    apiLeagueId: String,
                    name: String,
                    important: Boolean,
                    startDate: Option[Date],
                    endDate: Option[Date],
                  )

object LeagueJsonFormat {

  import play.api.libs.json._

  implicit val leaguesFormat: OFormat[League] = Json.format[League]
}
