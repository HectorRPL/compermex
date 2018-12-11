package models.factor

import play.api.libs.json.{Json, OFormat}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Factor (
                  _id: Option[BSONObjectID],
                  factor1: Double,
                  factor2: Double,
                  factor3: Double,
                  factor4: Option[Double],
                  factor5: Option[Double],
                  factor6: Option[Double]
                  )
object Factor {

  implicit val factorFormat: OFormat[Factor] = Json.format[Factor]

}