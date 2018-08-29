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
  charactersMinName: number = 2;
  charactersMaxName: number = 50;

  constructor(private formBuilder: FormBuilder) {
    this.supplier = new Supplier();
  }

  ngOnInit(): void {

    this.createSuppliersForm();

  }

  createSuppliersForm() {
    this.suppliersForm = this.formBuilder.group({
      'name': new FormControl(this.supplier.name, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMinName),
        Validators.maxLength(this.charactersMaxName),
      ])
    });
  }

  get name() {
    return this.suppliersForm.get('name');
  }

  next() {
    console.log(this.suppliersForm);
  }

}
