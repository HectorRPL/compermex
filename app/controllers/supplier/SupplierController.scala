package controllers.supplier

import javax.inject.Inject
import models.Pagination
import models.address.Address
import models.supplier.Supplier
import myservices.addresses.AddressesService
import myservices.suppliers.SuppliersService
import play.api.i18n.{I18nSupport, Messages}
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import reactivemongo.bson.{BSONDocument, BSONObjectID}

import scala.concurrent.{ExecutionContext, Future}

class SupplierController @Inject()(
                                    cc: ControllerComponents,
                                    suppliersServ: SuppliersService,
                                    addressesService: AddressesService
                                  )(implicit ec: ExecutionContext)
  extends AbstractController(cc)
    with I18nSupport {

  def list() = Action.async {
    val pag = Pagination(50, 0)
    val query = Json.obj()
    val sort = Json.obj()
    suppliersServ.getAll(query, sort, pag).map { suppliers =>
      Ok(Json.toJson(suppliers))
    }

  }

  def save() = Action.async(parse.json) { implicit request =>
    request.body.validate[Supplier].map { data =>
      suppliersServ.save(data).map { result =>
        Ok(Json.toJson(result))
      }
    }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }
  }

  def search(name: String) = Action.async {
    val query = Json.obj(
      "name" -> Json.obj("$regex" -> name, "$options" -> "i"))
    val sort = Json.obj("name" -> -1)
    val pag = Pagination(20, 0)

    suppliersServ.getAll(query, sort, pag).map { suppliers =>
      Ok(Json.toJson(suppliers))
    }
  }

  def saveAddress(supplierId: BSONObjectID) = Action.async(parse.json) { implicit request =>
    request.body.validate[Address].map { data =>

      addressesService.save(data).map { address =>
        val query = Json.obj("_id" -> Json.obj("$oid" -> supplierId.stringify))
        val modifier = Json.obj(
          // this modifier will set the fields
          // 'updateDate', 'title', 'content', and 'publisher'
          "$set" -> Json.obj(
            "addressId" -> Json.obj("$oid" -> address._id.get.stringify)
          ))
        print(query)
        print(modifier)

        suppliersServ.update(query, modifier).map { _ =>
          print(_)
        }
        Ok(Json.toJson(address))
      }
    }.recoverTotal {
      case error =>
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.data"))))
    }

  }

  def one(supplierId: BSONObjectID) = Action.async {
    suppliersServ.getOne(supplierId).map { optSupplier =>
      optSupplier.map { supplier =>
        Ok(Json.toJson(supplier))
      }.getOrElse(NotFound)
    }
  }

}
