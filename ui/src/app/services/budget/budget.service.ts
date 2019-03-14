import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {BudgetFrm} from "../../models/budget/budget";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private uri: string;

  private handleError: HandleError;
  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService,
              private router : Router) {
    this.handleError = httpErrorHandler.createHandleError('BudgetService');
  }

  compute(budget: BudgetFrm): Observable<BudgetFrm> {
    return this.http.post<BudgetFrm>(this.router.url, budget)
      .pipe(
        catchError(this.handleError('compute', null))
      )
  }


}
