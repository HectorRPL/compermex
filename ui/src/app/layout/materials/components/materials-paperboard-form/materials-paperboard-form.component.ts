import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Paperboard} from "../../../../models/paperboard/paperboard.model";

@Component({
  selector: 'app-materials-paperboard-form',
  templateUrl: './materials-paperboard-form.component.html',
  styleUrls: ['./materials-paperboard-form.component.css']
})
export class MaterialsPaperboardFormComponent implements OnInit {

  @Input() public paperboard: Paperboard;

  @Output() private saveOrUpdate = new EventEmitter();

  public paperboardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.fn_createMainForm();
  }

  private fn_createMainForm() {
    this.paperboardForm = this.formBuilder.group({
      'description': new FormControl('', [
        Validators.required
      ]),
      'color': new FormControl('', [
        Validators.required
      ]),
      'strength': new FormControl('', [
        Validators.required
      ]),
      'type': new FormControl('', [
        Validators.required
      ])
    });
    console.log(this.paperboardForm);
  }

  /**
   * For validation
   */
  get description() {
    return this.paperboardForm.get('description');
  }
  get color() {
    return this.paperboardForm.get('color');
  }
  get strength() {
    return this.paperboardForm.get('strength');
  }
  get type() {
    return this.paperboardForm.get('type');
  }

  fn_reset(): void {
    this.paperboardForm.reset();
  }

  fn_saveOrUpdate() {
    this.paperboard.description = this.paperboardForm.value.description;
    this.paperboard.colorId = this.paperboardForm.value.color._id;
    this.paperboard.strengthId = this.paperboardForm.value.strength._id;
    this.paperboard.typeId = this.paperboardForm.value.type._id;
    console.log('[VARIABLE] paperboard: ', this.paperboard);

    this.saveOrUpdate.emit(this.paperboard);
  }

}
