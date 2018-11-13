import {ObjectId} from "../object-id.model";

export class TokenUser {
  firstName: string;
  lastName: string;
  email: string;
  fullName?: string;
  displayName?: string;
  picture?: string;
  areaId: ObjectId
}
