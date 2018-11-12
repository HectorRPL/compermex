import {ObjectId} from "../../../models/object-id.model";

export class OrderTemp {
  companyId: ObjectId;
  noOrder: string; //El id que se forma (ver PDF)
  supplierId: ObjectId;
  boxId:ObjectId; //Lo que se da de alta en el maestro de materiales.
  numBoxes: Number;
  clienteId:ObjectId;

  observations: string;
  fiscalDataId: ObjectId; // Crear un autocomplete de los datos fiscales
  paperboardId: ObjectId;
  kgMinLinier: number;
  kgMinKraft: number;
  quotation?: object; // TODO => Investiar de donde sacar toda esta información (lado derecho validor) Generar view and model.(Especificaiones de Cotizacion)

}
