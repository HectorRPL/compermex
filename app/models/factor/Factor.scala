package models.factor

import models.box.BoxType
import models.material.{Strengths, Type}
import play.api.libs.json.{Json, OFormat}
import reactivemongo.bson.BSONObjectID

case class Factor (
                    _id: Option[BSONObjectID],
                    factor1: Double,
                    factor2: Double,
                    factor3: Double,
                    strengthId: Option[BSONObjectID],
                    boxTypeId: Option[BSONObjectID],
                    typeId: Option[BSONObjectID],
                    strength: Option[Strengths],
                    typeMaterial: Option[Type],
                    boxType: Option[BoxType]
                  )
object Factor {
  implicit val factorFormat: OFormat[Factor] = Json.format[Factor]
}