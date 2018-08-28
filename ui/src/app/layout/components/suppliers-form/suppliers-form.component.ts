import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Supplier} from '../../models/supplier.model';


@Component({
  selector: 'app-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styleUrls: ['./suppliers-form.component.css']
})
export class SuppliersFormComponent implements OnInit {

  supplier: Supplier;
  suppliersForm: FormGroup;
  charactersMinimumRfc: number = 10;

  constructor(private formBuilder: FormBuilder) {
    this.supplier = new Supplier();
  }

  ngOnInit(): void {

    this.createSuppliersForm();

  }

  createSuppliersForm() {
    this.suppliersForm = this.formBuilder.group({
      'rfc': new FormControl(this.supplier.rfc, [
        Validators.required,
        Validators.minLength(this.charactersMinimumRfc)
      ])
    });
  }

  get rfc() {
    return this.suppliersForm.get('rfc');
  }

  next() {
    console.log(this.suppliersForm);
  }

}
