import {ObjectId} from '../../../models/object-id.model';

export class BuyOrder {
  id: ObjectId;
  supplierId: ObjectId;
  employeId: ObjectId;
  saleOrderId: ObjectId;
  paperboardId: ObjectId;
  fiscalDataId?: ObjectId;
  folioInvoice: string;
  total: number;
  subtotal: number;
  numTotalProducts: number;
  numTotalCancel: number;
  numTotalDelivered: number;
  moneyToPay: number; // Dinero que debo
  moneyPaid: number; // Dinero Pagado
  cubicMeters: number;
  creditDays: number;
}
