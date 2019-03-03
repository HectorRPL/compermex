import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandlerService} from "../http-error-handler.service";
import {HttpClient} from "@angular/common/http";
import {Paperboard} from "../../models/paperboard/paperboard.model";
import {Observable} from "rxjs/Rx";
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class PaperboardService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('PaperboardService');
  }

  add(paperboard: Paperboard): Observable<Paperboard> {
    return this.http.post<Paperboard>('/add/paperboard', paperboard)
      .pipe(
        catchError(this.handleError('add', null))
      );
  }
}
