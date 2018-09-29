import { Component, OnInit } from '@angular/core';
import {FiscalData} from '../../../models/fiscal-data.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fiscal-data-physical-person-form',
  templateUrl: './fiscal-data-physical-person-form.component.html',
  styleUrls: ['./fiscal-data-physical-person-form.component.css']
})
export class FiscalDataPhysicalPersonFormComponent implements OnInit {

  public dataFiscal: FiscalData;
  public fiscalDataPhysicalPersonForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.dataFiscal = new FiscalData();
    this.dataFiscal.taxRegime = 'MP'

  }

  ngOnInit() {

    this.createfiscalDataPhysicalPersonForm();

  }

  createfiscalDataPhysicalPersonForm() {
    this.fiscalDataPhysicalPersonForm = this.formBuilder.group({
      'taxRegime': new FormControl(this.dataFiscal.taxRegime, [
        Validators.required
      ]),
      'rfc': new FormControl(this.dataFiscal.rfc, [
        Validators.required,
        Validators.pattern(/^([A-ZÑ&]{4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)
      ]),
      'businessName': new FormControl(this.dataFiscal.businessName, [
        Validators.required,
        Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ&_.\s\d]+$/)
      ])
    });

  }

  get taxRegime() {
    return this.fiscalDataPhysicalPersonForm.get('taxRegime');
  }

  get rfc() {
    return this.fiscalDataPhysicalPersonForm.get('rfc');
  }

  get businessName() {
    return this.fiscalDataPhysicalPersonForm.get('businessName');
  }

  fiscalDataAction() {
    console.log(this.fiscalDataPhysicalPersonForm);
  }

}
