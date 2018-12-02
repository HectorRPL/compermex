import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Reception} from '../../layout/reception/models/reception.model';
import {SaleOrder} from "../../layout/orders/models/sale-order.model";
import {PurchaseOrder} from "../../layout/orders/models/buy-order.model";

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('ReceptionService');
  }

  searchReceptions(name: String): Observable<Reception[]> {
    return this.http.get<Reception[]>('/receptions/search')
      .pipe(
        catchError(this.handleError('searchReceptions', []))
      );
  }

  addReception(order: Reception): Observable<Reception> {
    return this.http.post<Reception>('/add/reception', order)
      .pipe(
        catchError(this.handleError('add', order))
      );
  }

  //TODO cambiar al verdadero servicio
  getSalesOrders(): Observable<SaleOrder[]> {
    return this.http.get<SaleOrder[]>('/orders/receive')
      .pipe(
        catchError(this.handleError('getSalesOrders', []))
      );
  }

}
