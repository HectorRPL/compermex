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
  // boxSizeLarge?: BoxSize;
  // boxSizeSmall?: BoxSize;
  // description: string;
  // employeId: ObjectId; // Checar el autocomplete, en maestro de materiales
  // paperboardId: ObjectId;
}
