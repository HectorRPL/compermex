package models.material

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._


case class MaterialStrength(
                             _id: Option[BSONObjectID],
                             code: Int,
                             strength: String,
                             materialTypeId: Option[BSONObjectID],
                             meterialTypeDesc: Option[String],
                             materialColorId: Option[BSONObjectID],
                             materialColorDesc: Option[String]
                           )

object MaterialStrength {

  implicit object MaterialStrengthReaders extends Reads[MaterialStrength] {

    def reads(json: JsValue): JsResult[MaterialStrength] = json match {
      case obj: JsObject => try {
        val _id = (obj \ "_id").asOpt[BSONObjectID]
        val code = (obj \ "code").as[Int]
        val strength = (obj \ "strength").as[String]
        val materialTypeId = (obj \ "materialTypeId").asOpt[BSONObjectID]
        val meterialTypeDesc = (obj \ "meterialTypeDesc").asOpt[String]
        val materialColorId = (obj \ "materialColorId").asOpt[BSONObjectID]
        val materialColorDesc = (obj \ "materialColorDesc").asOpt[String]


        JsSuccess(MaterialStrength(_id, code, strength, materialTypeId,
          meterialTypeDesc, materialColorId, materialColorDesc))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object MaterialStrengthWriter extends OWrites[MaterialStrength] {
    def writes(materialStrength: MaterialStrength): JsObject = Json.obj(
      "_id" -> materialStrength._id,
      "code" -> materialStrength.code,
      "strength" -> materialStrength.strength,
      "materialTypeId" -> materialStrength.materialTypeId,
      "meterialTypeDesc" -> materialStrength.meterialTypeDesc,
      "materialColorId" -> materialStrength.materialColorId,
      "materialColorDesc" -> materialStrength.materialColorDesc
    )
  }

}