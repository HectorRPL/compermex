import {ObjectId} from '../../../models/object-id.model';
import {BoxSize} from './box-size.model';

export class MaterialsMaster { // TODO => SON CAJAS => Cajas
  observations: string;
  companyId?: ObjectId; // TODO => se quita de la forma
  customerId?: ObjectId; // TODO => se quita de la forma
  variationPositive: number;
  variationNegative: number;
  code: string; // clave
  boxTypeId: ObjectId; // Cajas
  sellerPrice: number;
  employeeId?: ObjectId; // Checar el autocomplete, en maestro de materiales  // TODO => se quita de la forma
  description: string;
  paperboardId: ObjectId; // Se harcodea, pero deben ser del tipo: BoxSize;
  width: number;
  large: number;
  high: number;
  plane: boolean;
  quality: boolean; // Certificado de calidad
  unitCost: number;
  boxSizeLarge?: string; // Se harcodea, pero deben ser del tipo: BoxSize;
  boxSizeSmall?: string; // Se harcodea, pero deben ser del tipo: BoxSize;
}
