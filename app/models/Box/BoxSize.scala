package models.Box

import reactivemongo.bson.BSONObjectID

class BoxSize (
                _id: Option[BSONObjectID],
                boxId: BSONObjectID,
                size: String,
                large: Option[Double],
                width: Option[Double],
                high: Option[Double]
              )

