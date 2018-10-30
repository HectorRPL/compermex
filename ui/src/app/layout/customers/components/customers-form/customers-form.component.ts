import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../../models/customer/customer.model';
import {CustomersService} from '../../service/customers.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {

  public customer: Customer;
  customersForm: FormGroup;

  // VALIDACIONES PARA EL INPUT NOMBRE
  charactersMinName: number = 2;
  charactersMaxName: number = 50;
  // VALIDACIONES PARA EL INPUT EMAIL
  charactersMinEmail: number = 5;
  charactersMaxEmail: number = 50;
  // VALIDACIONES PARA EL INPUT TELÉFONO
  charactersMinPhone: number = 8;
  charactersMaxPhone: number = 10;

  constructor(private formBuilder: FormBuilder,
              private customerServ: CustomersService) {

    this.customer = new Customer();

  }

  ngOnInit(): void {

    this.createCustomersForm();

  }

  createCustomersForm() {
    this.customersForm = this.formBuilder.group({
      'name': new FormControl(this.customer.name, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMinName),
        Validators.maxLength(this.charactersMaxName)
      ]),
      'email': new FormControl(this.customer.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(this.charactersMinEmail),
        Validators.maxLength(this.charactersMaxEmail)
      ]),
      'phone': new FormControl(this.customer.phone, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(this.charactersMinPhone),
        Validators.maxLength(this.charactersMaxPhone)
      ])
    });
  }

  get name() {
    return this.customersForm.get('name');
  }

  get email() {
    return this.customersForm.get('email');
  }

  get phone() {
    return this.customersForm.get('phone');
  }

  /*
  add() {
    this.customerServ.addCustomer(this.fillCustomer())
      .subscribe(result => {
        console.log(result);
      });
  }
  */

  /*
  fillCustomer(): Customer {

    const formModel = this.customersForm.value;
    const customer: Customer = {
      name: formModel.name,
      email: formModel.email,
      phone: formModel.phone
    } as Customer;

    console.log(customer);

    return customer;
  }
  */

}
