import {ObjectId} from "../object-id.model";

export class Employee {
  _id: ObjectId;
  name: string;
  email?: string;
  phone: number;
}
