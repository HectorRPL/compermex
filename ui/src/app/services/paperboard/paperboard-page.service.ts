import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs/Rx';
import {Paperboard} from '../../models/paperboard/paperboard.model';
import {Pagination} from '../../models/components/table/pagination.model';
import {HttpClient} from '@angular/common/http';
import {catchError, debounceTime, delay, switchMap, tap} from 'rxjs/internal/operators';
import {PaginationConstant} from '../../constants/pagination.constants';

@Injectable()
export class PaperboardPageService {

  private handleError: HandleError;

  private _search$ = new Subject<void>();

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _result$ = new BehaviorSubject<Paperboard[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _pagination: Pagination = {
    page: PaginationConstant.INIT_PAGE,
    pageSize: PaginationConstant.PAGE_SIZE,
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
      switchMap(() => this.fn_search()),
      delay(0),
      tap(() => {
        this._loading$.next(false);
        // this.ngxService.stopLoader('loader-01');
      })
    ).subscribe(response => {
      this._result$.next(response);
    });

    this._search$.pipe(
      tap(() => {
        this._loading$.next(true);
        // this.ngxService.startLoader('loader-01');
      }),
      debounceTime(400),
      switchMap(() => this.fn_count()),
      delay(0),
      tap(() => {
        this._loading$.next(false);
        // this.ngxService.stopLoader('loader-01');
      })
    ).subscribe(response => {
      this._total$.next(response);
    });

    this._search$.next();
  }

  private fn_search(): Observable<Paperboard[]> {
    return this.http.get<Paperboard[]>(`/paperboards/search?name=${this._pagination.searchTerm}&curPage=${this._pagination.page}&pageSize=${this._pagination.pageSize}`)
      .pipe(
        catchError(this.handleError('fn_search', []))
      );
  }

  private fn_count(): Observable<number> {
    return this.http.get<number>(`/paperboards/count?name=${this._pagination.searchTerm}`)
      .pipe(
        catchError(this.handleError('fn_count', 0))
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
    this._pagination.page = PaginationConstant.INIT_PAGE;
    this._set({pageSize});
  }
  set searchTerm(searchTerm: string) {
    this._pagination.page = PaginationConstant.INIT_PAGE;
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
