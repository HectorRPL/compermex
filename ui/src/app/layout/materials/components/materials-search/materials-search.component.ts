import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {MaterialsService} from '../../service/materials.service';
import {Material} from '../../models/material.model';

@Component({
  selector: 'app-materials-search',
  templateUrl: './materials-search.component.html',
  styleUrls: ['./materials-search.component.css']
})
export class MaterialsSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private materialsService: MaterialsService) {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.materialsService.searchMaterials(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Material) => x;
  inFormatter = (result: Material) => result;

  selectedItem($event) {
    console.log($event);
  }

}
