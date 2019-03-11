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
}
