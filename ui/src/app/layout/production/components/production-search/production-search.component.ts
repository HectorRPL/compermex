import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {ProductionService} from '../../service/production.service';
import {Production} from '../../models/production.model';

@Component({
  selector: 'app-production-search',
  templateUrl: './production-search.component.html',
  styleUrls: ['./production-search.component.css']
})
export class ProductionSearchComponent{

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private productionService: ProductionService) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.productionService.getProduction().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Production) => x;
  inFormatter = (result: Production) => result;

  selectedItem($event) {
    console.log($event);
  }

}



