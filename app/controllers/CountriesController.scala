package controllers

import javax.inject.{Inject, Singleton}

import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import reactivemongo.bson.BSONObjectID
import models.CountryJsonFormat._
import repositories.CountriesRepo

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

@Singleton
class CountriesController @Inject()(
                                     cc: ControllerComponents,
                                     contriesRepo: CountriesRepo,
                                     val reactiveMongoApi: ReactiveMongoApi)
  extends AbstractController(cc)
    with MongoController with ReactiveMongoComponents {

  def list() = Action.async{


    contriesRepo.getCountries().map { countries =>
      Ok(Json.toJson(countries))
    }
  }

  def one(countryId: BSONObjectID) = Action.async{ req =>
    contriesRepo.getCountrie(countryId).map{ maybeCountry =>
      maybeCountry.map{ country =>
        Ok(Json.toJson(country))
      }.getOrElse(NotFound)
    }
  }

}
