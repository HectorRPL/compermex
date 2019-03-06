package models.factor

import models.box.BoxType
import models.material.{Strengths, Type}

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class Factor (
                    _id: Option[BSONObjectID],
                    factor1: Double,
                    factor2: Double,
                    factor3: Double,
                    strengthId: Option[BSONObjectID],
                    boxTypeId: Option[BSONObjectID],
                    typeId: Option[BSONObjectID],
                    strength: Option[Strengths],
                    boxType: Option[BoxType],
                    typeMaterial: Option[Type]
                  )
object Factor {
  implicit val factorFormat: OFormat[Factor] = Json.format[Factor]
}