package db

import reactivemongo.api.MongoConnection

import scala.concurrent.Future
import scala.util.Try
import scala.concurrent.ExecutionContext.Implicits.global

class Conexion {

  val driver = new reactivemongo.api.MongoDriver
  val mongoUri = "mongodb://127.0.0.1:27017/compermex"

  def connection(driver: reactivemongo.api.MongoDriver): Try[MongoConnection] =
    MongoConnection.parseURI(mongoUri).map { parsedUri =>
      driver.connection(parsedUri)
    }

}
