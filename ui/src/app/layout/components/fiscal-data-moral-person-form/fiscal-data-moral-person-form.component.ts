import { Component, OnInit } from '@angular/core';
import {FiscalData} from '../../models/fiscal-data.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fiscal-data-moral-person-form',
  templateUrl: './fiscal-data-moral-person-form.component.html',
  styleUrls: ['./fiscal-data-moral-person-form.component.css']
})
export class FiscalDataMoralPersonFormComponent implements OnInit {

  public dataFiscal: FiscalData;
  public fiscalDataMoralPersonForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.dataFiscal = new FiscalData();
    this.dataFiscal.taxRegime = 'FP'

  }

  ngOnInit() {

    this.createfiscalDataMoralPersonForm();

  }

  createfiscalDataMoralPersonForm() {
    this.fiscalDataMoralPersonForm = this.formBuilder.group({
      'taxRegime': new FormControl(this.dataFiscal.taxRegime, [
        Validators.required
      ]),
      'rfc': new FormControl(this.dataFiscal.rfc, [
        Validators.required,
        Validators.pattern(/^([A-ZÑ&]{3}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)
      ]),
      'businessName': new FormControl(this.dataFiscal.businessName, [
        Validators.required,
        Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ&_.\s\d]+$/)
      ])
    });

  }

  get taxRegime() {
    return this.fiscalDataMoralPersonForm.get('taxRegime');
  }

  get rfc() {
    return this.fiscalDataMoralPersonForm.get('rfc');
  }

  get businessName() {
    return this.fiscalDataMoralPersonForm.get('businessName');
  }

  fiscalDataAction() {
    console.log(this.fiscalDataMoralPersonForm);
  }

}
