import {ObjectId} from "../object-id.model";

export class Employee {
  _id?: ObjectId;          // _id
  ownerId: ObjectId;      // propietarioId
  departmentId: ObjectId; // departamentoId
  storeId: ObjectId;      // tiendaId => compañíaId
  names: string;          // nombres
  lastNames: string;      // apellidos
  email?: string;         // email
  sex: string;            // HOMBRE / MUJER
  birdDate: Date;         // nacimiento
  phone: number;          // Teléfono
}
