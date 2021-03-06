import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class PasswordService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private router: Router,
              private http: HttpClient) {
  }

  forgotPassword(data: any): Promise<void> {
    return this.http.post('/password/forgot', data)
      .toPromise()
      .then(response => {
        return;
      })
      .catch(this.handleError);
  }

  resetPassword(token: string, data: any): Promise<void> {
    return this.http.post('/password/reset/' + token, data)
      .toPromise()
      .then(response => {
        return;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
