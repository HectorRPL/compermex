import {Component} from '@angular/core';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Company} from '../../../../models/company/company.model';
import {Observable, of} from 'rxjs/index';
import {CustomersService} from '../../../customers/service/customers.service';

@Component({
  selector: 'app-customers-search',
  templateUrl: './customers-search.component.html',
  styleUrls: ['./customers-search.component.css']
})
export class CustomersSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private customersService: CustomersService) {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.customersService.getCustomers().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
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
