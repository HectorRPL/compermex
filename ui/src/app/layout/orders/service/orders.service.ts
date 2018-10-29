import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Order} from '../../../models/order';

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
    return this.http.get<Order[]>('api/orders')
      .pipe(
        catchError(this.handleError('search', []))
      );
  }

  addOrder(order: Order): Observable<Order> {
    console.log('Dentro del servicio ', order);
    return this.http.post<Order>('/orders/create', order)
      .pipe(
        catchError(this.handleError('add', order))
      );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('api/orders')
      .pipe(
        catchError(this.handleError('getOrders', []))
      );
  }

}
