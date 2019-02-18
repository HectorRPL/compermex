import {ObjectId} from '../object-id.model';

export class Paperboard {
  _id: ObjectId;
  code: number;
  description: string;
  colorId?: ObjectId;
  strengthId?: ObjectId;
  typeId?: ObjectId;

  constructor () {
    this.code = 0;
  }
}
