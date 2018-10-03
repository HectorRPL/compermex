import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {CardboardService} from "../../../../services/cardboard/cardboard.service";
import {Cardboard} from "../../../../models/cardboard/cardboard.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cardboard-search',
  templateUrl: './cardboard-search.component.html',
  styleUrls: ['./cardboard-search.component.css']
})
export class CardboardSearchComponent implements OnInit {

  public cardboard: Cardboard;
  cardboardForm: FormGroup;

  model: any;
  searching = false;
  searchFailed1 = false;

  constructor(private cardboardService: CardboardService,
              private formBuilder: FormBuilder) {

    this.cardboard = new Cardboard();

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

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.cardboardService.getCardboards().pipe(
          tap(() => this.searchFailed1 = false),
          catchError(() => {
            this.searchFailed1 = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Cardboard) => x.strength;
  inFormatter = (result: Cardboard) => result.strength;

  selectedItem($event) {
    console.log($event);
  }

}
