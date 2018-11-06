import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Quality} from '../models/quality.model';
import {Observable} from 'rxjs/Observable';
import {HandleError, HttpErrorHandlerService} from '../../../services/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class QualityService {

  private handleError: HandleError;

  constructor(public http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('QualityService');
  }

  searchQuality(name: String): Observable<Quality[]> {
    return this.http.get<Quality[]>('/qualities/search/')
      .pipe(
        catchError(this.handleError('searchQualities', []))
      );
  }

  addQuality(quality: Quality): Observable<Quality> {
    return this.http.post<Quality>('/add/quality', quality)
      .pipe(
        catchError(this.handleError('add', quality))
      );
  }

  getQuality(): Observable<Quality[]> {
    return this.http.get<Quality[]>('/qualities')
      .pipe(
        catchError(this.handleError('getQualities', []))
      );
  }

}

