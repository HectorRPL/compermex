import {ObjectId} from "../object-id.model";
import {Area} from "../area/area.model";

export class Employee {
  _id: ObjectId;
  userId: ObjectId;
  areaId: ObjectId;
  names: string;
  fullName: string;
  emai: string;
  lastName: string;
  sex: string;
  birdDate: Date;
  mobile: number;
  area?:Area;
}
