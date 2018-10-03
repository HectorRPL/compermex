import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {Cardboard} from '../../models/cardboard/cardboard.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardboardService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {

    this.handleError = httpErrorHandler.createHandleError('CompanyService');

  }

  getCardboards(): Observable<Cardboard[]> {
    return this.http.get<Cardboard[]>('api/cardboard')
      .pipe(
        catchError(this.handleError('getCardboards', []))
      );
  }
}


