package forms

import java.util.Date

import reactivemongo.bson.BSONObjectID

case class OrderForm(
                      companyId: BSONObjectID,
                      serialOrder: Int,
                      serialQuotation: Int,
                      noOrder: String, //El id que se forma (ver PDF)
                      supplierId: BSONObjectID,
                      boxId: BSONObjectID, //Lo que se da de alta en el maestro de materiales.
                      numBoxes: Int,
                      clienteId: BSONObjectID,
                      variationPositive: Int,
                      variationNegative: Int,
                      quality: Boolean, //Requeire o no certificado de calidad (Verificar de que collecion proviene)
                      plane: String, //Plano de la caja(investigar de donde proviene)
                      observations: String, //
                      fiscalDataId: BSONObjectID, //Crear un autocomplete de los datos fiscales
                      paperboardId: BSONObjectID, //cartonId
                      boxTypeId: BSONObjectID, //Catalogo de tipo de cajas
                      kgMinLinier: Int,
                      kgMinKraft: Int,
                      //quotation: object //Generar view and model.(Especificaiones de Cotizacion)
                    )


