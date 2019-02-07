import {Injectable} from '@angular/core';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {BoxType} from '../../models/box/box-type';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {

  private uri: string;

  private handleError: HandleError;
  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('BoxesService');
    this.uri = '/boxes'
  }

  getTypes(): Observable<BoxType[]> {
    return this.http.get<BoxType[]>(`${this.uri}/types`)
      .pipe(
        catchError(this.handleError('getTypes', []))
      );
  }
}
