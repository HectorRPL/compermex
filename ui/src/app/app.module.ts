import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './components/modal/modal.component';
import {MessagesService} from './services/messages.service';
import {HttpErrorHandlerService} from './services/http-error-handler.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    MessagesService,
    HttpErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
