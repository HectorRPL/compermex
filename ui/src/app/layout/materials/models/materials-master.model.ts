import {ObjectId} from '../../../models/object-id.model';
import {BoxSize} from './box-size.model';

export class MaterialsMaster {
  // PANEL ARTÍCULO
  code: string; // clave
  description: string;
  boxTypeId: ObjectId;
  companyId: ObjectId;
  customerId: ObjectId;
  employeId: ObjectId; // Checar el autocomplete, en maestro de materiales

  // <!--PANEL MEDIDAS-->
  boxSizeLarge?: BoxSize;
  boxSizeSmall?: BoxSize;

  // <!--PANEL ESPEFIFICACIONES...-->
  paperboardId: ObjectId;
  variationPositive: number;
  variationNegative: number;
  sellerPrice; number;
  observations: string;
}
