import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {EmployeesService} from '../../service/employees.service';
import {Employee} from '../../../../models/employee/employee';


@Component({
  selector: 'app-employeess-search',
  templateUrl: './employeess-search.component.html',
  styleUrls: ['./employeess-search.component.css']
})
export class EmployeessSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private employeesService: EmployeesService) {

  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.employeesService.getEmployees().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Employee) => x.names;
  inFormatter = (result: Employee) => result.names;

  selectedItem($event) {
    console.log($event);
  }

}
