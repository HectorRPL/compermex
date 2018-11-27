import {ObjectId} from '../object-id.model';

export class Colonies {
  _id: ObjectId;
  code: string;
  colony: string;
  town: string;
  state: string;
  city: string;
  stateCode: string;
}
