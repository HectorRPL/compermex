import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {Employee} from '../models/employee/employee';
import {Area} from '../../../models/area/client.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private handleError: HandleError;

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

}
