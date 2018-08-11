package controllers

import javax.inject.{Inject, Singleton}

import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import repositories.LeaguesRepo
import models.LeagueJsonFormat._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

// El @Singleton se usa respuestas asyncronas (pendiente investigar la razon) y solo crea una instancia de este objeto
@Singleton
class LeaguesCtrl @Inject()(
                             cc: ControllerComponents,
                             leaguesRepo: LeaguesRepo,
                             val reactiveMongoApi: ReactiveMongoApi
                           )
  extends AbstractController(cc)
    with MongoController with ReactiveMongoComponents {

  def list() = Action.async {

    leaguesRepo.getLeagues().map {leagues =>
      Ok(Json.toJson(leagues))
    }
  }
}

