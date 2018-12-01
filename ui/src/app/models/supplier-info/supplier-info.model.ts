import {ObjectId} from "../object-id.model";

export class SupplierInfo {
  _id?: ObjectId;
  supplierId?: ObjectId;
  creditDays: number;
  qualityCertificate: boolean;
  price: number;
  minLong: number;
  maxLong: number;
  minHigh: number;
  maxHigh: number;
  minSquareMeters: number;
}
