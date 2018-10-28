import {ObjectId} from "../../../../models/object-id.model";

export class Employee {
  _id: ObjectId;
  areaId: ObjectId;
  username: string;
  lastName: string;
  password: string;
  sex: string;
  birdDate: Date;
  mobile: number;
}
