package models

case class Pagination(
                  limit: Int,
                  skip: Int
                )

object Pagination {
  def fromPages(curPage: Int, pageSize: Int): Option[Pagination] = {
    val limit = pageSize
    val skip = (curPage - 1) * pageSize

    Some(new Pagination(limit, skip))
  }

}