import { Injectable } from '@angular/core';
import {TokenUser} from '../../models/auth/token-user';
import {Observable, Subject} from 'rxjs';
import {AuthService} from 'ng2-ui-auth';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable()
export class UserService {

  public user: TokenUser;
  expiration: Date;
  secret: Observable<Object>;
  userChangedSource = new Subject<TokenUser>();
  userChanged$ = this.userChangedSource.asObservable();

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private auth: AuthService,
              private router: Router,
              private http: HttpClient) {
    this.renewUser().catch(_ => _);
  }

  logout() {
    this.user = null;
    return this.auth.logout();
  }

  getUser() {
    return this.user;
  }

  renewUser(): Promise<TokenUser> {
    this.expiration = this.auth.getExpirationDate();
    this.secret = this.http.get('/secret').
    pipe(map(response => response));

    return this.http.get('/api/user')
      .toPromise()
      .then(response => {
        this.user = response as TokenUser;
        this.userChangedSource.next(this.user);
        return this.user;
      })
      .catch(this.handleError);
  }

  isAuthenticated() {
    return this.user && this.auth.isAuthenticated();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
