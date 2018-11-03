import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Cardboard} from '../../../../models/cardboard/cardboard.model';

@Component({
  selector: 'app-cardboards-form',
  templateUrl: './cardboards-form.component.html',
  styleUrls: ['./cardboards-form.component.css']
})
export class CardboardsFormComponent implements OnInit {

  public cardboard: Cardboard;
  cardboardsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.cardboard = new Cardboard();

  }

  ngOnInit() {

    this.createCardboardsForm();

  }

  createCardboardsForm() {
    this.cardboardsForm = this.formBuilder.group({
      'type': new FormControl(this.cardboard.type, [
        Validators.required
      ]),
      'color': new FormControl(this.cardboard.color, [
        Validators.required
      ]),
      'strength': new FormControl(this.cardboard.strength, [
        Validators.required
      ])
    });
  }

  get type() {
    return this.cardboardsForm.get('type');
  }

  get color() {
    return this.cardboardsForm.get('color');
  }

  get strength() {
    return this.cardboardsForm.get('strength');
  }

  cardboardAction() {
    console.log(this.cardboardsForm);
  }

}
