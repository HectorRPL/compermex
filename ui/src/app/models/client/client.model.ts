import {ObjectId} from "../object-id.model";

export class Client {
  _id: ObjectId;
  name: string;
  email?: string;
  phone: number;
}
