import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {CardboardService} from "../../../../services/cardboard/cardboard.service";
import {Cardboard} from "../../../../models/cardboard/cardboard.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cardboard-search',
  templateUrl: './cardboard-search.component.html',
  styleUrls: ['./cardboard-search.component.css']
})
export class CardboardSearchComponent implements OnInit {

  @Output() public hijoDisparaEvento = new EventEmitter();

  public cardboard: Cardboard;
  cardboardForm: FormGroup;

  constructor(private cardboardService: CardboardService,
              private formBuilder: FormBuilder) {

    this.cardboard = new Cardboard();

  }

  emiterDePrueba() {
    this.hijoDisparaEvento.emit('le mandas parametro para que el papá los cache');
  }

  ngOnInit() {

    this.createOrderForm();

  }

  createOrderForm() {
    this.cardboardForm = this.formBuilder.group({
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
    return this.cardboardForm.get('type');
  }

  get color() {
    return this.cardboardForm.get('color');
  }

  get strength() {
    return this.cardboardForm.get('strength');
  }

}
