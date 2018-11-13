import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandlerService} from "../http-error-handler.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Area} from "../../models/area/client.model";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('AreasService');
  }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('/areas')
      .pipe(
        catchError(this.handleError('getAreas', []))
      );
  }

  getArea(_id: String): Observable<Area> {
    return this.http.get<Area>(`/area/${_id}`)
      .pipe(
        catchError(this.handleError('getArea', null))
      );
  }


}
