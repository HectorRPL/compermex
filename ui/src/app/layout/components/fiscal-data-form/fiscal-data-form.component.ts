import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FiscalData} from '../../models/fiscal-data.model';

@Component({
  selector: 'app-fiscal-data-form',
  templateUrl: './fiscal-data-form.component.html',
  styleUrls: ['./fiscal-data-form.component.css']
})
export class FiscalDataFormComponent implements OnInit {

  public dataFiscal: FiscalData;
  public fiscalDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

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

  get taxRegime() {
    return this.fiscalDataForm.get('taxRegime');
  }

  fiscalDataAction() {
    console.log(this.fiscalDataForm);
  }

}
