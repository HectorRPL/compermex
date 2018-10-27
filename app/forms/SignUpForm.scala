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
                         birthDate: Date,
                         password: String,
                         sex: String,
                         mobile: String
                 )

  object SignUpForm {

    implicit object SignUpFormReaders extends Reads[SignUpForm] {

      def reads(json: JsValue): JsResult[SignUpForm] = json match {
        case obj: JsObject => try {
          val areaId = (obj \ "_id").as[BSONObjectID]
          val names = (obj \ "names").as[String]
          val lastName = (obj \ "lastName").as[String]
          val username = (obj \ "username").as[String]
          val birthDate = (obj \ "birthDate").as[Date]
          val password = (obj \ "password").as[String]
          val sex = (obj \ "sex").as[String]
          val mobile = (obj \ "mobile").as[String]


          JsSuccess(SignUpForm(areaId, names, lastName,
            username, birthDate, password, sex, mobile))

        } catch {
          case cause: Throwable => JsError(cause.getMessage)
        }

        case _ => JsError("expected.jsobject")
      }

    }

  }

}