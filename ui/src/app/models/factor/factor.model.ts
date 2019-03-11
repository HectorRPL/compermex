import {ObjectId} from '../object-id.model';
import {Strength} from '../material/strengths.model';
import {BoxType} from '../box/box-type';
import {MaterialType} from '../material/type.model';

export class Factor {
  _id: ObjectId;
  factor1: number;
  factor2: number;
  factor3: number;
  strengthId: ObjectId;
  strength: Strength;
  boxTypeId: ObjectId;
  boxType: BoxType;
  typeId: ObjectId;
  materialType: MaterialType;
}
