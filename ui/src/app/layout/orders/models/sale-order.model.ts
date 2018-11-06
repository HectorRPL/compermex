import {ObjectId} from '../../../models/object-id.model';

export class SaleOrder {
  _id: ObjectId;
  boxId: ObjectId; // caja, trae las medidas.
  employeId: ObjectId;
  clientId: ObjectId;
  companyId: ObjectId;
  fiscalDataId?: ObjectId;
  numSaleOrder: string;
  quantity: number;
  cubicMeters: number;
  total: number;
  subtotal: number;
  numTotalProducts: number;
  numTotalCancel: number;
  numTotalDelivered: number;
  moneyCollect: number; // Saldo por Cobrar
  moneyCharged: number; // total cobrado
}
