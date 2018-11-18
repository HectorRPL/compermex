import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Supplier} from '../models/supplier/supplier.model';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {Address} from "../../../models/address.model";
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

  addSupplierAddress(address: Address, supplierId: string): Observable<Address> {
    console.log(address);
    console.log(supplierId);
    return this.http.post<Address>(`/add/supplier/${supplierId}/address`, address)
      .pipe(
        catchError(this.handleError('addAddress', address))
      );
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('/suppliers')
      .pipe(
        catchError(this.handleError('getSuppliers', []))
      );
  }


}
