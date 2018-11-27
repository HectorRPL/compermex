import {ObjectId} from '../object-id.model';

export class ZipCode {
  _id: ObjectId;
  code: string;
  colony: string;
  town: string;
  state: string;
  city: string;
  stateCode: string;
}
