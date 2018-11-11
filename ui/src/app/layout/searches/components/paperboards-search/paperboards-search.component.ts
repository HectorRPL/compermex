import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {CardboardsService} from "../../../cardboards/service/cardboards.service";
import {Paperboard} from "../../../../models/paperboard/paperboard.model";

@Component({
  selector: 'app-paperboards-search',
  templateUrl: './paperboards-search.component.html',
  styleUrls: ['./paperboards-search.component.css']
})
export class PaperboardsSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private cardboardsService: CardboardsService) {

  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.cardboardsService.searchPaperboard(term.toUpperCase()).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Paperboard) => x.description;
  inFormatter = (result: Paperboard) => result.description;

  selectedItem($event) {
    console.log($event);
  }

}