import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {CardboardService} from "../../../../services/cardboard/cardboard.service";
import {Cardboard} from "../../../../models/cardboard/cardboard.model";

@Component({
  selector: 'app-cardboard-search',
  templateUrl: './cardboard-search.component.html',
  styleUrls: ['./cardboard-search.component.css']
})
export class CardboardSearchComponent {

  model: any;
  searching = false;
  searchFailed1 = false;

  constructor(private cardboardService: CardboardService) {
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
