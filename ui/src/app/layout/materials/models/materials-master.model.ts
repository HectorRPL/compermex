import {ObjectId} from '../../../models/object-id.model';
import {BoxSize} from './box-size.model';

export class MaterialsMaster {
  observations: string;
  companyId: ObjectId;
  customerId: ObjectId;
  // code: string; // clave
  // description: string;
  // boxTypeId: ObjectId; // Cajas
  // employeId: ObjectId; // Checar el autocomplete, en maestro de materiales
  // boxSizeLarge?: BoxSize;
  // boxSizeSmall?: BoxSize;
  // paperboardId: ObjectId;
  // variationPositive: number;
  // variationNegative: number;
  // sellerPrice: number;
}
