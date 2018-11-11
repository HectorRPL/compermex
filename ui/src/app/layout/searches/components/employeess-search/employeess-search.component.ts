import {Component, EventEmitter, Output} from '@angular/core';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs/index';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeesService} from '../../../employees/service/employees.service';
import {Employee} from '../../../employees/models/employee/employee';

@Component({
  selector: 'app-employeess-search',
  templateUrl: './employeess-search.component.html',
  styleUrls: ['./employeess-search.component.css']
})
export class EmployeessSearchComponent {

  @Output() public sendStatusForm = new EventEmitter();
  public employeeSearchForm: FormGroup;
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private employeesService: EmployeesService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createEmployeeSearchForm();
  }

  createEmployeeSearchForm() {
    this.employeeSearchForm = this.formBuilder.group({
      'employee': new FormControl('', [
        Validators.required
      ]),
    });
  }

  get employee() {
    return this.employeeSearchForm.get('employee');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.employeesService.searchEmployees(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Employee) => x.fullName;
  inFormatter = (result: Employee) => result.fullName;

  selectedItem(event) {
    console.log(event);
    if (this.employeeSearchForm.status === 'VALID') {
      const value = {
        status: false,
        _id: event.item._id
      };
      this.sendStatusForm.emit(value);
    } else if (this.employeeSearchForm.status === 'INVALID') {
      const value = {
        status: true,
        _id: null
      };
      this.sendStatusForm.emit(value);

    }
  }

}
