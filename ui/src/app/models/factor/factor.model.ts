import {ObjectId} from '../object-id.model';

export class Factor {
  _id: ObjectId;
  factor1: number;
  factor2: number;
  factor3: number;
  strengthId: ObjectId;
  boxTypeId: ObjectId;
  typeId: ObjectId;
}
