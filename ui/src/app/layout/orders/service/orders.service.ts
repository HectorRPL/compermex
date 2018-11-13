import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Order} from '../../../models/order';
import {OrderTemp} from "../models/order-temp";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('OrdersService');
  }

  searchOrders(name: String): Observable<Order[]> {
    return this.http.get<Order[]>(`/orders/search/${name}`)
      .pipe(
        catchError(this.handleError('search', []))
      );
  }

  addOrder(OrderTemp: OrderTemp): Observable<OrderTemp> {
    console.log('Dentro del servicio ', OrderTemp);
    return this.http.post<OrderTemp>('/add/order', OrderTemp)
      .pipe(
        catchError(this.handleError('add', OrderTemp))
      );
  }

  getOrders(): Observable<OrderTemp[]> {
    return this.http.get<OrderTemp[]>('/orders')
      .pipe(
        catchError(this.handleError('getOrders', []))
      );
  }

}
