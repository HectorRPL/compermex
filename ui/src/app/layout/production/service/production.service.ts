import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HandleError, HttpErrorHandlerService} from "../../../services/http-error-handler.service";
import {catchError} from 'rxjs/operators';
import {Production} from "../models/production.model";

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('ProductionService');
  }

  searchProduction(name: String): Observable<Production[]> {
    return this.http.get<Production[]>('api/productions')
      .pipe(
        catchError(this.handleError('search', []))
      );
  }

  addProduction(order: Production): Observable<Production> {
    console.log('Dentro del servicio ', order);
    return this.http.post<Production>('/productions/create', order)
      .pipe(
        catchError(this.handleError('add', order))
      );
  }

  getProduction(): Observable<Production[]> {
    return this.http.get<Production[]>('api/productions')
      .pipe(
        catchError(this.handleError('getProduction', []))
      );
  }

}

