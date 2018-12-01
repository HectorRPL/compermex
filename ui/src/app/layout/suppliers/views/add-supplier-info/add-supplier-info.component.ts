import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-supplier-info',
  templateUrl: './add-supplier-info.component.html',
  styleUrls: ['./add-supplier-info.component.css']
})
export class AddSupplierInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipeSupplierInfoForm(form: NgForm) {
    console.log('Recibiendo recipeSupplierInfoForm');
    console.log(form);
  }

}
