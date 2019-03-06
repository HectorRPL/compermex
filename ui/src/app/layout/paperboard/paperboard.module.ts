import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaperboardsRoutingModule} from './paperboard-routing.module';
import {AddPaperboardComponent} from './views/add-paperboard/add-paperboard.component';
import {ListPaperboardComponent}  from './views/list-paperboard/list-paperboard.component';
import {SearchesModule} from "../searches/searches.module";
import {PaperboardComponent} from "./components/paperboard/paperboard.component";
import {PaperboardFormComponent} from "./components/paperboard-form/paperboard-form.component";
import {PaperboardService} from '../../services/paperboard/paperboard.service';
import {PaperboardPageService} from '../../services/paperboard/paperboard-page.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    PaperboardsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SearchesModule
  ],
  declarations: [
    PaperboardComponent,
    PaperboardFormComponent,
    AddPaperboardComponent,
    ListPaperboardComponent
  ],
  providers: [
    PaperboardService,
    PaperboardPageService
  ]
})
export class PaperboardModule {
}
