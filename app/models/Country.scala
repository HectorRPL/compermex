package models

import play.api.libs.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

case class Country(
                  _id: Option[BSONObjectID],
                  iso2: String,
                  iso3: Option[String],
                  name: String,
                  continent: Option[String],
                  currency: Option[String],
                  phoneCode: Option[String],
                  capital: Option[String],
                  apiId: Option[String]
                )

object CountryJsonFormat {

  import play.api.libs.json._

  //implicit val countriesFormat: OFormat[Countries] = Json.format[Countries]

  implicit object CountryReaders extends Reads[Country] {
    def reads(json: JsValue): JsResult[Country] = json match {
      case obj: JsObject => try {
        val id = (obj \ "_id").asOpt[BSONObjectID]
        val iso2 = (obj \ "iso2").as[String]
        val iso3 = (obj \ "iso3").asOpt[String]
        val name = (obj \ "name").as[String]
        val continent = (obj \ "continent").asOpt[String]
        val currency = (obj \ "currency").asOpt[String]
        val phoneCode = (obj \ "phoneCode").asOpt[String]
        val capital = (obj \ "capital").asOpt[String]
        val apiId = (obj \ "apiId").asOpt[String]

        JsSuccess(Country(id, iso2, iso3, name, continent, currency, phoneCode, capital, apiId))

      } catch {
        case cause: Throwable => JsError(cause.getMessage)
      }

      case _ => JsError("expected.jsobject")
    }
  }

  implicit object CountryWriter extends OWrites[Country] {
    def writes(countries: Country): JsObject = Json.obj(
      "_id" -> countries._id,
      "iso2" -> countries.iso2,
      "iso3" -> countries.iso3,
      "name" -> countries.name,
      "continent" -> countries.continent,
      "currency" -> countries.currency,
      "phoneCode" -> countries.phoneCode,
      "capital" -> countries.capital,
      "apiId" -> countries.apiId)

  }


}