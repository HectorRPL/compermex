package db.dao.boxes.sizes

import javax.inject.Inject
import models.box.BoxSize
import play.modules.reactivemongo.ReactiveMongoApi
import reactivemongo.bson.BSONObjectID
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class BoxesSizesDAOImpl @Inject()(
                                   val reactiveMongoApi: ReactiveMongoApi
                                 ) extends BoxesSizesDAO {

  def collection: Future[JSONCollection] = reactiveMongoApi.database.map(_.collection("boxesSizes"))

  def saveBoxSize(boxSize: BoxSize): Future[BoxSize] = {
    val doc = boxSize.copy(_id = Some(BSONObjectID.generate()))
    collection.flatMap(_.insert(doc))
    Future.successful(doc)
  }
}
