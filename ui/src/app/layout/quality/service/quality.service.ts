import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {PurchaseOrder} from '../../orders/models/buy-order.model';

@Injectable({
  providedIn: 'root'
})
export class QualityService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('QualityService');
  }


  //TODO cambiar al verdadero servicio
  getPurcharsesOrders(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>('orders/quality')
      .pipe(
        catchError(this.handleError('getPurcharsesOrders', []))
      );
  }

}

