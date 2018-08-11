package controllers

import javax.inject.Inject
import play.api.libs.ws._
import play.api.mvc.{AbstractController, ControllerComponents}

class TotalCornerCtrl @Inject() (ws: WSClient, cc: ControllerComponents) extends AbstractController(cc) {

}
