import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {MessagesService} from "./message/messages.service";
import {of} from "rxjs/observable/of";
import {Alert} from "../models/alerts/alert.model";

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/*
  Generated class for the HttpErrorHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpErrorHandlerService {

  constructor(private messagesServ: MessagesService) { }

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
  (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (response: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(response); // log to console instead

      const message = (response.error instanceof ErrorEvent) ?
        response.error.message :
        `server returned code ${response.status} with body "${response.error}"`;

      // TODO: better job of transforming error for user consumption

      this.messagesServ.add(new Alert('dange',
        `${serviceName}: ${operation} failed: ${message}`, ''));

      // Let the app keep running by returning a safe result.
      return of( result );
    };

  }

}
