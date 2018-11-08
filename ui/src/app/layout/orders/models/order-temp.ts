import {ObjectId} from "../../../models/object-id.model";

export class OrderTemp {
  companyId: ObjectId;
  serialOrder: number;
  serialQuotation: number;
  noOrder: string; //El id que se forma (ver PDF)
  supplierId: ObjectId;
  boxId:ObjectId; //Lo que se da de alta en el maestro de materiales.
  numBoxes: Number;
  clienteId:ObjectId;
  variationPositive: number;
  variationNegative: number;
  quality: boolean; //Requeire o no certificado de calidad (Verificar de que collecion proviene)
  plane: string; //Plano de la caja(investigar de donde proviene)
  observations: string; //
  fiscalDataId: ObjectId; //Crear un autocomplete de los datos fiscales
  paperboardId: ObjectId; //cartonId
  boxTypeId: ObjectId; //Catalogo de tipo de cajas
  kgMinLinier: number;
  kgMinKraft: number;
  quotation: object; //Generar view and model.(Especificaiones de Cotizacion)



}
