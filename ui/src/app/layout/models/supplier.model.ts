import {ObjectId} from "./object-id.model";

export class Supplier {
  _id: ObjectId;
  name: string;
  email: string;
  phone: number;
}
