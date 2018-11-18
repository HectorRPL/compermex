import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Supplier} from '../models/supplier/supplier.model';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {Direction} from "../../../models/direction.model";
import {ObjectId} from "../../../models/object-id.model";

@Injectable()
export class SupplierService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('SupplierService');
  }


  searchSuppliers(name: String): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`/suppliers/search/${name}`)
      .pipe(
        catchError(this.handleError('searchSuppliers', []))
      );
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    console.log(supplier);
    return this.http.post<Supplier>('/add/supplier', supplier)
      .pipe(
        catchError(this.handleError('addSupplier', supplier))
      );
  }

  addSupplierDirection(direction: Direction, supplierId: string): Observable<Direction> {
    console.log(direction);
    return this.http.post<Direction>(`/add/supplier/${supplierId}/address`, direction)
      .pipe(
        catchError(this.handleError('addDirection', direction))
      );
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('/suppliers')
      .pipe(
        catchError(this.handleError('getSuppliers', []))
      );
  }


}
