import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {QualityService} from '../../service/quality.service';
import {Quality} from '../../models/quality.model';

@Component({
  selector: 'app-quality-search',
  templateUrl: './quality-search.component.html',
  styleUrls: ['./quality-search.component.css']
})
export class QualitySearchComponent  {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private qualityService: QualityService) {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.qualityService.getQuality().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Quality) => x;
  inFormatter = (result: Quality) => result;

  selectedItem($event) {
    console.log($event);
  }

}



