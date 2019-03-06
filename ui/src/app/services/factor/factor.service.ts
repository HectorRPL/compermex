import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {HttpClient} from '@angular/common/http';
import {Factor} from '../../models/factor/factor.model';
import {Observable} from 'rxjs/Rx';
import {catchError} from 'rxjs/internal/operators';

@Injectable()
export class FactorService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FactorService');
  }

  add(factor: Factor): Observable<Factor> {
    return this.http.post<Factor>('/add/factor', factor)
      .pipe(
        catchError(this.handleError('add', null))
      );
  }
}
