import {ObjectId} from "../../../models/object-id.model";

export class SignUp {
  areaId: ObjectId;
  username: string;
  lastName: string;
  password: string;
  birdDate: Date;
  sex: string;
  mobile: number;
}
