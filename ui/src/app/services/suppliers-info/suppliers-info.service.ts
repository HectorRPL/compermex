import {Injectable} from '@angular/core';
import {HandleError, HttpErrorHandlerService} from "../http-error-handler.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {SupplierInfo} from "../../models/supplier-info/supplier-info.model";

@Injectable()
export class SuppliersInfoService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {

    this.handleError = httpErrorHandler.createHandleError('SuppliersInfoService');

  }

  addSuppliersInfo(supplierInfo: SupplierInfo, supplierId: string): Observable<SupplierInfo> {
    console.log('dentro del servicio para agregar supplierInfo');
    console.log(supplierInfo);
    console.log('supplierId');
    console.log(supplierId);
    return this.http.post<SupplierInfo>(`/add/supplier/${supplierId}/info`, SupplierInfo)
      .pipe(
        catchError(this.handleError('info', supplierInfo))
      );
  }
}
