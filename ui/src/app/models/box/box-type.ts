import {ObjectId} from "../object-id.model";

export class BoxType {
  _id: ObjectId;
  code: string;
  description: string;
  formula: string;
}
