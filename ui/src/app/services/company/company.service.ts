import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../../models/company/company.model';
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {HandleError, HttpErrorHandlerService} from "../http-error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('CompanyService');
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('companies')
      .pipe(
        catchError(this.handleError('getCompanies', []))
      );
  }
}
