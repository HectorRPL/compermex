import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FiscalData} from '../../../../models/fiscal-data.model';

@Component({
  selector: 'app-fiscal-data-form',
  templateUrl: './fiscal-data-form.component.html',
  styleUrls: ['./fiscal-data-form.component.css']
})
export class FiscalDataFormComponent implements OnInit {

  public dataFiscal: FiscalData;
  public fiscalDataForm: FormGroup;
  public taxRegimeValue: string;

  @Output() public sendDataForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {

    this.taxRegimeValue = null;
    this.dataFiscal = new FiscalData();

  }

  ngOnInit() {

    this.createFiscalDataForm();

  }

  createFiscalDataForm() {

    this.fiscalDataForm = this.formBuilder.group({
      'taxRegime': new FormControl(this.dataFiscal.taxRegime, [
        Validators.required
      ])
    });

  }

  createFiscalDataForm2(taxRegime: string) {
    this.taxRegimeValue = taxRegime;

    if (this.taxRegimeValue === 'fisica') {
      this.fiscalDataForm = this.formBuilder.group({
        'taxRegime': new FormControl('PF', [
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

    } else {
      this.fiscalDataForm = this.formBuilder.group({
        'taxRegime': new FormControl('PM', [
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
  }

  get taxRegime() {
    return this.fiscalDataForm.get('taxRegime');
  }

  get rfc() {
    return this.fiscalDataForm.get('rfc');
  }

  get businessName() {
    return this.fiscalDataForm.get('businessName');
  }

  fiscalDataAction() {
    this.sendDataForm.emit(this.fiscalDataForm);
  }

}
