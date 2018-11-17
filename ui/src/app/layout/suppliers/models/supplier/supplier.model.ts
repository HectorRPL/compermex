import {ObjectId} from "../../../../models/object-id.model";

export class Supplier {
  name: string;
  _id?: ObjectId;
  addressId?: string;
  fiscalDataId?: string;
  code?: string;
  email?: string;
  phone?: string;
  fax?: string;
  contact?: string;
  alias?: string;
  active?: boolean;
}
