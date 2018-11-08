import {ObjectId} from '../object-id.model';

export class Paperboard {
  _id: ObjectId;
  code: number;
  description: string;
  materialColorId?: ObjectId;
  materialTypeId?: ObjectId;
  materialStrengthId?: ObjectId;
}
