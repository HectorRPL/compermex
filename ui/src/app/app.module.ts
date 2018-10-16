import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './components/modal/modal.component';
import {MessagesService} from './services/message/messages.service';
import {HttpErrorHandlerService} from './services/http-error-handler.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {httpInterceptorProviders} from './http-interceptors';
import {CookieModule} from 'ngx-cookie';
import {Ng2UiAuthModule, StorageType} from 'ng2-ui-auth';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    HttpClientModule,
    CookieModule.forRoot(),
    Ng2UiAuthModule.forRoot({
      baseUrl: '/',
      loginUrl: '/auth/signIn',
      signupUrl: '/auth/signUp',
      tokenName: 'token',
      tokenPrefix: 'ng2-ui-auth',
      authHeader: 'X-Auth-Token',
      storageType: 'cookie' as StorageType.COOKIE
    }),
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    httpInterceptorProviders,
    MessagesService,
    HttpErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
