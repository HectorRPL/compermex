import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Reception} from '../models/reception.model';

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
    console.log('Dentro del servicio ', order);
    return this.http.post<Reception>('/add/reception', order)
      .pipe(
        catchError(this.handleError('add', order))
      );
  }

  getReceptions(): Observable<Reception[]> {
    return this.http.get<Reception[]>('/receptions')
      .pipe(
        catchError(this.handleError('getReceptions', []))
      );
  }

}
