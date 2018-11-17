import {ObjectId} from "../object-id.model";

export class Company {
  _id: ObjectId;
  name: string;
  email?: string;
  phone: number;
  code: string;
  quotation: number;
  consecutive: number;
  identifier: string;
}
