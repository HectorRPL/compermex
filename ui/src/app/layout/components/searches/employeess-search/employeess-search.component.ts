import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeesService} from '../../../../services/employees/employees.service';
import {Employee} from '../../../../models/employee/employee';
import {ModalEmployeesComponent} from '../../../employees/components/modal-employees/modal-employees.component';


@Component({
  selector: 'app-employeess-search',
  templateUrl: './employeess-search.component.html',
  styleUrls: ['./employeess-search.component.css']
})
export class EmployeessSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private employeesService: EmployeesService,
              private modalService: NgbModal) {

  }

  addEmployeeModal() {
    const modalRef = this.modalService.open(ModalEmployeesComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
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

  resFormatter = (x: Employee) => x.name;
  inFormatter = (result: Employee) => result.name;

}
