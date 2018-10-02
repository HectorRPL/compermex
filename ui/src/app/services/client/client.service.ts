import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Client} from '../../models/client/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private handleError: HandleError;
  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('ClientService');
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('api/clients')
      .pipe(
        catchError(this.handleError('getClients', []))
      );
  }
}
