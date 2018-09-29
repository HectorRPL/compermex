import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Direction} from '../../../models/direction.model';

@Component({
  selector: 'app-directions-form',
  templateUrl: './directions-form.component.html',
  styleUrls: ['./directions-form.component.css']
})
export class DirectionsFormComponent implements OnInit {

  public direction: Direction;
  directionsForm: FormGroup;

  /******************************
  FORMA VALIDACIONES
  ******************************/

  // Caractéres máximos y minimos
  charactersMin: number = 2;
  charactersMax: number = 50;
  // INPUT NÚMERO EXTERIOR
  charactersMinExteriorNumber: number = 5;
  charactersMaxExteriorNumber: number = 50;
  // INPUT NÚMERO INTERIOR
  charactersMinInteriorNumber: number = 8;
  charactersMaxInteriorNumber: number = 10;

  constructor(private formBuilder: FormBuilder) {

    this.direction = new Direction();

  }

  ngOnInit() {

    this.createDirectionsForm();

  }

  createDirectionsForm() {
    this.directionsForm = this.formBuilder.group({
      'street': new FormControl(this.direction.street, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ]),
      'exteriorNumber': new FormControl(this.direction.exteriorNumber, [
        Validators.required,
        Validators.minLength(this.charactersMinExteriorNumber),
        Validators.maxLength(this.charactersMaxExteriorNumber)
      ]),
      'interiorNumber': new FormControl(this.direction.interiorNumber, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(this.charactersMinInteriorNumber),
        Validators.maxLength(this.charactersMaxInteriorNumber)
      ]),
      'postalCode': new FormControl(this.direction.postalCode, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ]),
      'suburb': new FormControl(this.direction.suburb, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ]),
      'state': new FormControl(this.direction.state, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ]),
      'town': new FormControl(this.direction.town, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ])
    });
  }

  get street() {
    return this.directionsForm.get('street');
  }

  get exteriorNumber() {
    return this.directionsForm.get('exteriorNumber');
  }

  get interiorNumber() {
    return this.directionsForm.get('interiorNumber');
  }

  get postalCode() {
    return this.directionsForm.get('postalCode');
  }

  get suburb() {
    return this.directionsForm.get('suburb');
  }

  get state() {
    return this.directionsForm.get('state');
  }

  get town() {
    return this.directionsForm.get('town');
  }

  directionAction() {
    console.log(this.directionsForm);
  }

}
