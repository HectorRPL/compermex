import {ObjectId} from "../object-id.model";

export class Customer {
  _id: ObjectId;
  name: string;
  email?: string;
  phone: number;
}
