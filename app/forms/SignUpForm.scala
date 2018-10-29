package forms



import java.util.Date

import play.api.libs.json._
import reactivemongo.play.json._
import reactivemongo.bson.BSONObjectID

object SignUpForm {


  case class SignUpForm(
                         areaId: BSONObjectID,
                         names: String,
                         lastName: String,
                         username: String,
                         password: String,
                         sex: String,
                         birthdate: Date,
                         mobile: String
                 )

  object SignUpForm {

    implicit object SignUpFormReaders extends Reads[SignUpForm] {

      def reads(json: JsValue): JsResult[SignUpForm] = json match {
        case obj: JsObject => try {
          val areaId = (obj \ "areaId").as[BSONObjectID]
          val names = (obj \ "names").as[String]
          val lastName = (obj \ "lastName").as[String]
          val username = (obj \ "username").as[String]
          val password = (obj \ "password").as[String]
          val sex = (obj \ "sex").as[String]
          val birthdate = (obj \ "birthdate").as[Date]
          val mobile = (obj \ "mobile").as[String]


          JsSuccess(SignUpForm(areaId, names, lastName,
            username, password, sex, birthdate, mobile))

        } catch {
          case cause: Throwable => JsError(cause.getMessage)
        }

        case _ => JsError("expected.jsobject")
      }

    }

  }

}