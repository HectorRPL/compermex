import {Component} from '@angular/core';
import {Observable} from 'rxjs/index';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Reception} from "../../models/reception.model";
import {ReceptionService} from "../../service/reception.service";

@Component({
  selector: 'app-reception-search',
  templateUrl: './reception-search.component.html',
  styleUrls: ['./reception-search.component.css']
})
export class ReceptionSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private receptionService: ReceptionService) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.receptionService.getReceptions().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Reception) => x;
  inFormatter = (result: Reception) => result;

  selectedItem($event) {
    console.log($event);
  }

}
