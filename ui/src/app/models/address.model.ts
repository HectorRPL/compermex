import {ObjectId} from "./object-id.model";

export class Address {
  _id?: ObjectId;
  street: string; // calle
  city: string; // delegación o munucipio
  state: string; // estado
  stateCode: string; // estado
  colony: string;
  zipCode: string;
  numExt: string; // numero exterior
  numInt: string; // número interior
}
