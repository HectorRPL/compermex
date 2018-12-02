import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Cardboard} from '../../models/cardboard/cardboard.model';

@Injectable({
  providedIn: 'root'
})
export class CardboardsService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('CardboardsService');
  }

  searchPaperboard(name: String): Observable<Cardboard[]> {
    console.log('está entrando aquí', name);
    return this.http.get<Cardboard[]>(`/paperboards/search/${name}`)
      .pipe(
        catchError(this.handleError('searchPaperboards', []))
      );
  }

  /*
  addCardboard(material: Cardboard): Observable<Cardboard> {
    console.log('Dentro del servicio ', material);
    return this.http.post<Cardboard>('/add/paperboards', material)
      .pipe(
        catchError(this.handleError('addPaperboard', material))
      );
  }

  getPaperboards(): Observable<Cardboard[]> {
    return this.http.get<Cardboard[]>('/paperboards')
      .pipe(
        catchError(this.handleError('getPaperboards', []))
      );
  }

  */

}
