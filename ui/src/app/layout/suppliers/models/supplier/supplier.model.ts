import {ObjectId} from "../../../../models/object-id.model";

export class Supplier {
  _id: ObjectId;
  username: string;
  email: string;
  phone: number;
}
