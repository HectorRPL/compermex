package repositories

import javax.inject.Inject
import models.Country
import reactivemongo.play.json._
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.play.json.collection.JSONCollection
import models.CountryJsonFormat._

import scala.concurrent.{ExecutionContext, Future}

class CountriesRepo @Inject()(
                              implicit ec: ExecutionContext,
                              reactiveMongoApi: ReactiveMongoApi
                            ) {

  def countriesCollec : Future[JSONCollection] =
    reactiveMongoApi.database.map(_.collection("countries"))

  def getCountries(): Future[Seq[Country]] ={

    val query = BSONDocument()
    countriesCollec.flatMap(_.find(query)
      .cursor[Country](ReadPreference.primary)
      .collect[Seq](10, Cursor.FailOnError[Seq[Country]]())
    )
  }

  def getCountrie(id: BSONObjectID): Future[Option[Country]] = {
    val query = BSONDocument("_id" -> id)
    countriesCollec.flatMap(_.find(query).one[Country])
  }

}
