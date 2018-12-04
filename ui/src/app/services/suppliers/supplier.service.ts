import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Supplier} from '../../layout/suppliers/models/supplier/supplier.model';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {Address} from "../../models/address.model";
import {Router} from "@angular/router";

@Injectable()
export class SupplierService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService,
              private router : Router) {
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
    return this.http.post<Supplier>(this.router.url, supplier)
      .pipe(
        catchError(this.handleError('addSupplier', supplier))
      );
  }

  addSupplierAddress(address: Address, supplierId: string): Observable<Address> {
    console.log(address);
    console.log(supplierId);
    return this.http.post<Address>(this.router.url, address)
      .pipe(
        catchError(this.handleError('addAddress', address))
      );
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.router.url)
      .pipe(
        catchError(this.handleError('getSuppliers', []))
      );
  }


}
