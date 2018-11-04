import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {CompanyService} from '../../../../services/company/company.service';
import {Company} from '../../../../models/company/company.model';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {

  model: any;
  searching = false;
  searchFailed1 = false;

  constructor(private companyService: CompanyService) {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.companyService.getCompanies().pipe(
          tap(() => this.searchFailed1 = false),
          catchError(() => {
            this.searchFailed1 = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Company) => x.name;
  inFormatter = (result: Company) => result.name;

  selectedItem($event) {
    console.log($event);
  }

}
