import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MessagesService} from './services/message/messages.service';
import {HttpErrorHandlerService} from './services/http-error-handler.service';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './http-interceptors';
import {CookieBackendService, CookieModule, CookieService} from 'ngx-cookie';
import {Ng2UiAuthModule, StorageType} from 'ng2-ui-auth';
import {NgbAlertModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AlertasComponent } from './components/alertas/alertas.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertasComponent
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
    NgbAlertModule,
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
