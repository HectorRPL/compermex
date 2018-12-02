import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {Employee} from '../../layout/employees/models/employee/employee';
import {Area} from '../../models/area/client.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private handleError: HandleError;
  public currentEmployee: Employee;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('EmployeesService');
  }

  searchEmployees(name: String): Observable<Employee[]> {
    return this.http.get<Employee[]>(`/employees/search/${name}`)
      .pipe(
        catchError(this.handleError('searchEmployees', []))
      );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log('Dentro del servicio ', employee);
    return this.http.post<Employee>('/add/employe', employee)
      .pipe(
        catchError(this.handleError('add', employee))
      );
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/employees')
      .pipe(
        catchError(this.handleError('getEmployees', []))
      );
  }

  getEmployeeByUserId(userdId: String): Observable<Employee> {
    return this.http.get<Employee>(`/employe/user/${userdId}`)
      .pipe(
        catchError(this.handleError('getEmployeeByUserId', null))
      );
  }

}
