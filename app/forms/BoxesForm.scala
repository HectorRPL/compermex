package forms

import javax.print.attribute.standard.PrintQuality
import models.box.BoxSize
import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._

case class BoxesForm(
                    code: String,
                    description: String,
                    boxTypeId: BSONObjectID,
                    companyId: Option[BSONObjectID],
                    customerId: Option[BSONObjectID],
                    employeeId: Option[BSONObjectID], // Checar el autocomplete, en maestro de materiales
                    large: Double,
                    width: Double,
                    high: Double,
                    boxesSize: Option[Seq[BoxSize]],
                    paperboardId: BSONObjectID,
                    variationPositive: Int,
                    variationNegative: Int,
                    sellerPrice: Double,
                    observations: Option[String],
                    quality: Boolean,
                    plane: Boolean,
                    size: String,
                    unitCost: Double
             )

object BoxesForm {

  implicit val boxesFormFormat = Json.format[BoxesForm]

}

