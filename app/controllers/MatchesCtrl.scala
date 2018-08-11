package controllers

import javax.inject.{Inject, Singleton}
import models.Matches
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import repositories.MatchesRepo
import models.MatchesJsonFormat._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

@Singleton
class MatchesCtrl @Inject()(
                             cc: ControllerComponents,
                             matchesRepo: MatchesRepo,
                             val reactiveMongoApi: ReactiveMongoApi
                           )
  extends AbstractController(cc)
    with MongoController with ReactiveMongoComponents {

  def list() = Action.async {

    matchesRepo.getMatches().map {matches =>
      Ok(Json.toJson(matches))
    }
  }

  def addMatch() = Action.async(parse.json) { req =>
    req.body.validate[Matches].map { mAtch =>
      matchesRepo.addMatch(mAtch).map { _ =>
        Created
      }
    }.getOrElse(Future.successful(BadRequest("Invalid Todo format")))
  }

}
