import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs/Rx';
import {Paperboard} from '../../models/paperboard/paperboard.model';
import {Pagination} from '../../models/components/table/pagination.model';
import {HttpClient} from '@angular/common/http';
import {catchError, debounceTime, delay, switchMap, tap} from 'rxjs/internal/operators';

@Injectable()
export class PaperboardPageService {

  private handleError: HandleError;

  private _search$ = new Subject<void>();

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _result$ = new BehaviorSubject<Paperboard[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private INIT_PAGE = 1;

  private _pagination: Pagination = {
    page: this.INIT_PAGE,
    pageSize: 10,
    searchTerm: ''
  };

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('PaperboardPageService');

    this._search$.pipe(
      tap(() => {
        this._loading$.next(true);
        // this.ngxService.startLoader('loader-01');
      }),
      debounceTime(400),
      switchMap(() => this.fn_paginator()),
      delay(0),
      tap(() => {
        this._loading$.next(false);
        // this.ngxService.stopLoader('loader-01');
      })
    ).subscribe(response => {
      this._result$.next(response);
      this._total$.next(100);
    });

    this._search$.next();
  }

  private fn_paginator(): Observable<Paperboard[]> {
    return this.http.get<Paperboard[]>(`/paperboards/search?name=${this._pagination.searchTerm}&curPage=${this._pagination.page}&pageSize=${this._pagination.pageSize}`)
      .pipe(
        catchError(this.handleError('search', []))
      );
  }

  get result$() { return this._result$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._pagination.page; }
  get pageSize() { return this._pagination.pageSize; }
  get searchTerm() { return this._pagination.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) {
    this._pagination.page = this.INIT_PAGE;
    this._set({pageSize});
  }
  set searchTerm(searchTerm: string) {
    this._pagination.page = this.INIT_PAGE;
    this._set({searchTerm});
  }

  private _set(patch: Partial<Pagination>) {
    Object.assign(this._pagination, patch);
    this._search$.next();
  }

  public fn_clear(): void {
    this._pagination.searchTerm = '';
    this._search$.next();
  }

  public fn_refresh(): void {
    this._search$.next();
  }
}
