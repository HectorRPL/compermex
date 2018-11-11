import {ObjectId} from '../../../models/object-id.model';
import {BoxSize} from './box-size.model';

export class MaterialsMaster {
  observations: string;
  companyId: ObjectId;
  customerId: ObjectId;
  variationPositive: number;
  variationNegative: number;
  code: string; // clave
  boxTypeId: ObjectId; // Cajas
  sellerPrice: number;
  employeeId: ObjectId; // Checar el autocomplete, en maestro de materiales
  description: string;
  paperboardId: ObjectId; // Se harcodea, pero deben ser del tipo: BoxSize;
  boxSizeLarge?: string; // Se harcodea, pero deben ser del tipo: BoxSize;
  boxSizeSmall?: string; // Se harcodea, pero deben ser del tipo: BoxSize;
}
