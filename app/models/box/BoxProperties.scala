package models.box

import play.api.libs.json.{Json, OFormat}
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class BoxProperties (
                         _id: Option[BSONObjectID],
                         quality: Boolean,
                         plane: Boolean,
                         ray: Boolean,
                         gra: Boolean,
                         pegman: Boolean,
                         imp: Boolean,
                         peg: Boolean,
                         tro: Boolean,
                         emb: Boolean,
                         variationPositive: Int,
                         variationNegative: Int,
                         )
object BoxProperties {
  implicit val boxPropertiesFormat: OFormat[BoxProperties] = Json.format[BoxProperties]

}

