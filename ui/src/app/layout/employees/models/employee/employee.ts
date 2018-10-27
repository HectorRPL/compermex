import {ObjectId} from "../../../../models/object-id.model";

export class Employee {
  _id?: ObjectId;         // _id
  userId: String;      // propietarioId
  departmentId: ObjectId; // departamentoId
  storeId: ObjectId;      // tiendaId => compañíaId
  names: string;          // nombres
  lastNames: string;      // apellidos
  username?: string;      // nombre de usuario
  password: string;       // contraseña
  sex: string;            // HOMBRE / MUJER
  birdDate: Date;         // nacimiento
  phone: number;          // Teléfono
}
