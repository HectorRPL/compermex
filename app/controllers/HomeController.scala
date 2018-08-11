package controllers

import javax.inject._

import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import reactivemongo.bson.BSONObjectID
import models.CountryJsonFormat._
import repositories.CountriesRepo

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

@Singleton
class HomeController @Inject()(cc: ControllerComponents,
                               contriesRepo: CountriesRepo,
                               val reactiveMongoApi: ReactiveMongoApi)
  extends AbstractController(cc)
    with MongoController with ReactiveMongoComponents {


  def appSummary() = Action.async{

    contriesRepo.getCountries().map { colonias =>
      Ok(Json.toJson(colonias))
    }
  }
}
