import {ObjectId} from "../../../models/object-id.model";

export class SignUpData {
  areaId: ObjectId;
  username: string;
  lastName: string;
  password: string;
  birthdate: Date;
  sex: string;
  mobile: number;
}
