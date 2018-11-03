import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Cardboard} from '../../../models/cardboard/cardboard.model';

@Injectable({
  providedIn: 'root'
})
export class CardboardsService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('CardboardsService');
  }

  searchCardboard(name: String): Observable<Cardboard[]> {
    return this.http.get<Cardboard[]>(`/cardboards/search/${name}`)
      .pipe(
        catchError(this.handleError('searchCardboard', []))
      );
  }

  addCardboard(material: Cardboard): Observable<Cardboard> {
    console.log('Dentro del servicio ', material);
    return this.http.post<Cardboard>('/cardboards/create', material)
      .pipe(
        catchError(this.handleError('add', material))
      );
  }

  getCardboards(): Observable<Cardboard[]> {
    return this.http.get<Cardboard[]>('/cardboards')
      .pipe(
        catchError(this.handleError('getCardboards', []))
      );
  }

}
