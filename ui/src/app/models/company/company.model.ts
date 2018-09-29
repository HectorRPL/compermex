import {ObjectId} from "../object-id.model";

export class Company {
  _id: ObjectId;
  name: string;
  email?: string;
  phone: number;
  quotation: number;
  consecutive: number;
}
