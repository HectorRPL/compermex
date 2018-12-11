package models.factor

import play.api.libs.json.{Json, OFormat}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Factor (
                  _id: Option[BSONObjectID],
                  factor1: Double,
                  factor2: Double,
                  factor3: Double,
                  minPrice:Double,
                  ray: Double,
                  gra: Double,
                  pegman: Double,
                  imp: Double,
                  peg: Double,
                  tro: Double,
                  emb: Double,
                  )
object Factor {

  implicit val factorFormat: OFormat[Factor] = Json.format[Factor]

}