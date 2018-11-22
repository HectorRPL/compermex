import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-supplier-fiscal-data',
  templateUrl: './add-supplier-fiscal-data.component.html',
  styleUrls: ['./add-supplier-fiscal-data.component.css']
})
export class AddSupplierFiscalDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getFiscalDataForm(fiscalDataForm: NgForm) {
    console.log('Recibiend los datos fiscales');
    console.log(fiscalDataForm);
  }

}
