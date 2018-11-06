import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HandleError, HttpErrorHandlerService} from "../../../services/http-error-handler.service";
import {catchError} from "rxjs/operators";
import {Customer} from "../../../models/customer/customer.model";
import {Observable} from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('SupplierService');
  }

  searchCustomers(name: String): Observable<Customer[]> {
    return this.http.get<Customer[]>(`/customers/search/${name}`)
      .pipe(
        catchError(this.handleError('search', []))
      );
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('/add/customer', customer)
      .pipe(
        catchError(this.handleError('add', customer))
      );
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/customers')
      .pipe(
        catchError(this.handleError('getCustomers', []))
      );
  }
}
