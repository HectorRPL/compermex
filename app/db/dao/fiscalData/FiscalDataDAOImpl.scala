package db.dao.fiscalData

import javax.inject.Inject
import models.fiscalData.FiscalData
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class FiscalDataDAOImpl @Inject()(
                                   val reactiveMongoApi: ReactiveMongoApi
                                 ) extends FiscalDataDAO {

  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("fiscalData"))

  def save(fiscalData: FiscalData): Future[FiscalData] = {
    val doc = fiscalData.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }
}
