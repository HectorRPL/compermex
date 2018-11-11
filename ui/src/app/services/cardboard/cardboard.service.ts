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

    this.handleError = httpErrorHandler.createHandleError('PaperboardService');

  }

  // TODO => es paperboards no cardboards, este archivo se seja de usar por lo mismo, Cuando se haga el refactor
  // este file se dejará de usar.
  /*
  getPaperboards(): Observable<Cardboard[]> {
    return this.http.get<Cardboard[]>('/paperboards')
      .pipe(
        catchError(this.handleError('getPaperboards', []))
      );
  }
  */
}


