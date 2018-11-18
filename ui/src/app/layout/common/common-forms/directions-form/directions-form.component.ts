import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Direction} from '../../../../models/direction.model';

@Component({
  selector: 'app-directions-form',
  templateUrl: './directions-form.component.html',
  styleUrls: ['./directions-form.component.css']
})
export class DirectionsFormComponent implements OnInit {

  public direction: Direction;
  public directionsForm: FormGroup;
  @Output() public returnsModelForm = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {

    this.direction = new Direction();

  }

  ngOnInit() {

    this.createDirectionsForm();

  }

  createDirectionsForm() {
    this.directionsForm = this.formBuilder.group({
      'street': new FormControl(this.direction.street, [
        Validators.required
      ]),
      'city': new FormControl(this.direction.city, [
        Validators.required
      ]),
      'state': new FormControl(this.direction.state, [
        Validators.required
      ]),
      'stateCode': new FormControl(this.direction.stateCode, [
        Validators.required
      ]),
      'colony': new FormControl(this.direction.colony, [
        Validators.required
      ]),
      'zipCode': new FormControl(this.direction.zipCode, [
        Validators.required
      ]),
      'numExt': new FormControl(this.direction.numExt, [
        Validators.required
      ]),
      'numInt': new FormControl(this.direction.numInt, [
        Validators.required
      ])
    });
  }

  get street() {
    return this.directionsForm.get('street');
  }

  get city() {
    return this.directionsForm.get('city');
  }

  get state() {
    return this.directionsForm.get('state');
  }

  get stateCode() {
    return this.directionsForm.get('stateCode');
  }

  get colony() {
    return this.directionsForm.get('colony');
  }

  get zipCode() {
    return this.directionsForm.get('zipCode');
  }

  get numExt() {
    return this.directionsForm.get('numExt');
  }

  get numInt() {
    return this.directionsForm.get('numInt');
  }

  next() {
    this.returnsModelForm.emit(this.fillDirection());
  }

  fillDirection(): Direction {

    const formModel = this.directionsForm.value;
    const direction: Direction = {
      street: formModel.street,
      city: formModel.city,
      state: formModel.state,
      stateCode: formModel.stateCode,
      colony: formModel.colony,
      zipCode: formModel.zipCode,
      numExt: formModel.numExt,
      numInt: formModel.numInt
    } as Direction;

    return direction;
  }

}
