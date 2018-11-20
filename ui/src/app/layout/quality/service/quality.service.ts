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

  searchQuality(name: String): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>('/purcharsesOrders/search/')
      .pipe(
        catchError(this.handleError('searchPurcharsesOrders', []))
      );
  }

  getQuality(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>('/purcharsesOrders')
      .pipe(
        catchError(this.handleError('getPurcharsesOrders', []))
      );
  }

}

