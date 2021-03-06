import {ObjectId} from '../../../models/object-id.model';

export class PurchaseOrder {
  _id: ObjectId;
  supplierId: ObjectId;
  employeId: ObjectId;
  saleOrderId: ObjectId;
  paperboardId: ObjectId;
  folioInvoice: string;
  total: number;
  subtotal: number;
  numTotalProducts: number;
  numTotalCancel: number;
  numTotalDelivered: number;
  numTotalQuality: number;
  moneyToPay: number;
  moneyPaid: number;
  cubicMeters: number;
  creditDays: number;
  status: number;
}
