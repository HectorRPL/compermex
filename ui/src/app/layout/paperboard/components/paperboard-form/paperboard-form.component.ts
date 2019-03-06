
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Paperboard} from "../../../../models/paperboard/paperboard.model";
import {Strength} from '../../../../models/material/strengths.model';
import {Color} from '../../../../models/material/color.model';
import {Type} from '../../../../models/material/type.model';

@Component({
  selector: 'app-paperboard-form',
  templateUrl: './paperboard-form.component.html',
  styleUrls: ['./paperboard-form.component.css']
})
export class PaperboardFormComponent implements OnInit {

  @Input() public paperboard: Paperboard;

  @Output() private saveOrUpdate = new EventEmitter();

  public paperboardForm: FormGroup;

  public description: String;
  public _strength: Strength;
  public _type: Type;
  public _color: Color;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.fn_createMainForm();
  }

  private fn_createMainForm() {
    this.paperboardForm = this.formBuilder.group({
      'strength': new FormControl('', [
        Validators.required
      ]),
      'type': new FormControl('', [
        Validators.required
      ]),
      'color': new FormControl('', [
        Validators.required
      ])
    });
    console.log(this.paperboardForm);
  }

  /**
   * For validation
   */
  get color() {
    return this.paperboardForm.get('color');
  }
  get strength() {
    return this.paperboardForm.get('strength');
  }
  get type() {
    return this.paperboardForm.get('type');
  }

  fn_updateStrength(strength: Strength): void {
    this._strength = strength;
    this.updateDescription();
  }

  fn_updateType(type: Type): void {
    this._type = type;
    this.updateDescription();
  }

  fn_updateColor(color: Color): void {
    this._color = color;
    this.updateDescription();
  }

  private updateDescription(): void {
    this.description = '';
    if (this._strength) {
      this.description += this._strength.description + ' ';
    }
    if (this._type) {
      this.description += this._type.description + ' ';
    }
    if (this._color) {
      this.description += this._color.description;
    }
  }

  fn_reset(): void {
    this.paperboardForm.reset();
    this.description = '';
  }

  fn_saveOrUpdate() {
    this.paperboard.description = this.description;
    this.paperboard.strengthId = this.paperboardForm.value.strength._id;
    this.paperboard.typeId = this.paperboardForm.value.type._id;
    this.paperboard.colorId = this.paperboardForm.value.color._id;
    console.log('[VARIABLE] paperboard: ', this.paperboard);

    this.saveOrUpdate.emit(this.paperboard);
  }
}
