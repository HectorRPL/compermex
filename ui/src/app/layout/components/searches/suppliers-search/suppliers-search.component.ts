import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs/operators";
import {of} from 'rxjs/observable/of';


@Component({
  selector: 'app-suppliers-search',
  templateUrl: './suppliers-search.component.html',
  styleUrls: ['./suppliers-search.component.css']
})
export class SuppliersSearchComponent implements OnInit {

  model: any;
  searching = false;
  searchFailed = false;

  constructor() { }

  ngOnInit() {
  }


  search(text$: Observable<string>) {
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )
  }



}
