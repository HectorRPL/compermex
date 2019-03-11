import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Factor} from '../../../../models/factor/factor.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-factor-form',
  templateUrl: './factor-form.component.html',
  styleUrls: ['./factor-form.component.css']
})
export class FactorFormComponent implements OnInit {

  @Input() public factor: Factor;

  @Output() private saveOrUpdate = new EventEmitter();

  public factorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fn_createMainForm();
  }

  private fn_createMainForm() {
    this.factorForm = this.formBuilder.group({
      'factor1': new FormControl('', [
        Validators.required
      ]),
      'factor2': new FormControl('', [
        Validators.required
      ]),
      'factor3': new FormControl('', [
        Validators.required
      ]),
      'boxType': new FormControl('', [
        Validators.required
      ]),
      'type': new FormControl('', [
        Validators.required
      ]),
      'strength': new FormControl('', [
        Validators.required
      ])
    });
    console.log(this.factorForm);
  }

  fn_reset(): void {
    this.factorForm.reset();
  }

  fn_saveOrUpdate() {
    console.log(this.factorForm)
    this.factor.factor1 = Number(this.factorForm.value.factor1);
    this.factor.factor2 = Number(this.factorForm.value.factor2);
    this.factor.factor3 = Number(this.factorForm.value.factor3);
    this.factor.boxTypeId = this.factorForm.value.boxType._id;
    this.factor.typeId = this.factorForm.value.type._id;
    this.factor.strengthId = this.factorForm.value.strength._id;
    console.log('[VARIABLE] factor: ', this.factor);

    this.saveOrUpdate.emit(this.factor);
  }
}
