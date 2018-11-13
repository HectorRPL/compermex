import {ObjectId} from "../../../models/object-id.model";

export class OrderTemp {
  boxId:ObjectId; //Lo que se da de alta en el maestro de materiales.
  supplierId: ObjectId;
  companyId: ObjectId;
  customerId:ObjectId;
  fiscalDataId: ObjectId; // Crear un autocomplete de los datos fiscales
  paperboardId: ObjectId;
  noOrder: string; //El id que se forma (ver PDF)
  numBoxes: number;
  observations: string;
  kgMinLinier: number;
  kgMinKraft: number;
  quotation?: object; // TODO => Investiar de donde sacar toda esta información (lado derecho validor) Generar view and model.(Especificaiones de Cotizacion)

}
