import {ObjectId} from '../../../models/object-id.model';

export class SaleOrder {
  _id: ObjectId;
  boxId: ObjectId;
  employeId: ObjectId;
  clientId: ObjectId;
  companyId: ObjectId;
  cubicMeters: number;
  total: number;
  subtotal: number;
  numTotalProducts: number;
  numTotalCancel: number;
  numTotalDelivered: number;
  numSaleOrder: string;
  moneyCollect: number;
  moneyCharged: number;
}
