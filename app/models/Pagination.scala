package models

case class Pagination(
                  limit: Int,
                  skip: Int
                )

object Pagination {

  def fromPages(curPage: Int, pageSize: Int): Pagination = {
    val limit = pageSize
    val skip = (curPage - 1) * pageSize

    new Pagination(limit, skip)
  }

}