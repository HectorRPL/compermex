import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Colonies} from '../../models/colonies/colonies.model';

@Injectable()
export class ColoniesService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('ColoniesService');
  }

  getColonies(zipCode: string): Observable<Colonies[]> {
    return this.http.get<Colonies[]>(`/colonies/${zipCode}`)
      .pipe(
        catchError(this.handleError('getColonies', []))
      );
  }
}
