import {ObjectId} from "../object-id.model";

export class BudgetFrm {
  paperboardId: ObjectId;
  typeId: ObjectId;
  strengthId: ObjectId;
  boxTypeId: ObjectId;
  width: number;
  large: number;
  depth: number;
  quantity: number;
}
