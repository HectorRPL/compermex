import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Direction} from '../../models/direction.model';

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

  // INPUT NOMBRE DE CALLE
  charactersMinStreet: number = 2;
  charactersMaxStreet: number = 50;
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
        Validators.minLength(this.charactersMinStreet),
        Validators.maxLength(this.charactersMaxStreet)
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

  directionAction() {
    console.log(this.directionsForm);
  }

}
