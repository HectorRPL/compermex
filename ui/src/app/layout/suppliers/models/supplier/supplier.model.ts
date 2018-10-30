import {ObjectId} from "../../../../models/object-id.model";

export class Supplier {
  _id?: ObjectId;
  addressId?: string;
  code?: string;
  name: string;
  email?: string;
  phone?: string;
  fax?: string;
  contact?: string;
  alias?: string;
  active?: boolean;
}
