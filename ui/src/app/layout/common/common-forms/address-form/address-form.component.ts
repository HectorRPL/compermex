import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../../../models/address.model';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  public address: Address;
  public addressForm: FormGroup;
  @Output() public returnsModelForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {

    this.address = new Address();

  }

  ngOnInit() {

    this.createAddressForm();

  }

  createAddressForm() {
    this.addressForm = this.formBuilder.group({
      'street': new FormControl(this.address.street, [
        Validators.required,
        Validators.pattern(/^[a-zA-ZñÑzáéíóúÁÉÍÓÚÜü\s\d]+$/),
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      'city': new FormControl(this.address.city, [
        Validators.required,
        Validators.pattern(/^[a-zA-ZñÑzáéíóúÁÉÍÓÚÜü\s\d]+$/),
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      'state': new FormControl(this.address.state, [
        Validators.required,
        Validators.pattern(/^[a-zA-ZñÑzáéíóúÁÉÍÓÚÜü\s\d]+$/),
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      'colony': new FormControl(this.address.colony, [
        Validators.required,
        Validators.pattern(/^[a-zA-ZñÑzáéíóúÁÉÍÓÚÜü\s\d]+$/),
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      'zipCode': new FormControl(this.address.zipCode, [
        Validators.required,
        Validators.pattern(/^[0-9]{5}$/)
      ]),
      'numExt': new FormControl(this.address.numExt, [
        Validators.required,
        Validators.pattern(/^[a-zA-ZñÑzáéíóúÁÉÍÓÚÜü\s\d]+$/),
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      'numInt': new FormControl(this.address.numInt, [
        Validators.pattern(/^[a-zA-ZñÑzáéíóúÁÉÍÓÚÜü\s\d]+$/),
        Validators.minLength(1),
        Validators.maxLength(50)
      ])
    });
  }

  get street() {
    return this.addressForm.get('street');
  }

  get city() {
    return this.addressForm.get('city');
  }

  get state() {
    return this.addressForm.get('state');
  }

  get colony() {
    return this.addressForm.get('colony');
  }

  get zipCode() {
    return this.addressForm.get('zipCode');
  }

  get numExt() {
    return this.addressForm.get('numExt');
  }

  get numInt() {
    return this.addressForm.get('numInt');
  }

  next() {
    this.returnsModelForm.emit(this.fillAddress());
  }

  fillAddress(): Address {

    const formModel = this.addressForm.value;
    const address: Address = {
      street: formModel.street,
      city: formModel.city,
      state: formModel.state,
      stateCode: 'CDMX',
      colony: formModel.colony,
      zipCode: formModel.zipCode,
      numExt: formModel.numExt,
      numInt: formModel.numInt
    } as Address;

    return address;
  }

}
