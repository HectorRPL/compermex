import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Supplier} from '../../layout/models/supplier.model';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class SupplierService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('SupplierService');
  }


  searchSuppliers(name: String): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('/supplier/create')
      .pipe(
        catchError(this.handleError('searchSuppliers', []))
      );
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    console.log('Dentro del servicio ', supplier);
    return this.http.post<Supplier>('/supplier/create', supplier)
      .pipe(
        catchError(this.handleError('addSupplier', supplier))
      );
  }

}
