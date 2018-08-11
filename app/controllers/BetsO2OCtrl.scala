package controllers

import javax.inject.{Inject, Singleton}
import models.BetsO2O
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import play.modules.reactivemongo.{MongoController, ReactiveMongoApi, ReactiveMongoComponents}
import repositories.BetsO2ORepo
import models.BetsO2OJsonFormat._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

@Singleton
class BetsO2OCtrl @Inject()(
                             cc: ControllerComponents,
                             betsO2ORepo: BetsO2ORepo,
                             val reactiveMongoApi: ReactiveMongoApi
                           )
  extends AbstractController(cc) with MongoController with ReactiveMongoComponents {

  def addBetO2O() = Action.async(parse.json) { req =>
    req.body.validate[BetsO2O].map { betO2O =>
      betsO2ORepo.addBetO2O(betO2O).map { _ =>
        Created
      }
    }.getOrElse(Future.successful(BadRequest("Invalid Todo format")))
  }

}
