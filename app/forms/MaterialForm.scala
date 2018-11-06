package forms

import play.api.libs.json.Json

case class MaterialForm(
                         description: String,
                       )
object MaterialForm {

  /**
    * Converts the [Date] object to Json and vice versa.
    */
  implicit val jsonFormat = Json.format[MaterialForm]
}