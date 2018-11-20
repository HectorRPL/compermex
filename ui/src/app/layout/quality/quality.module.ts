import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QualityComponent} from './components/quality/quality.component';
import {ListQualityComponent} from './views/list-quality/list-quality.component';
import {QualitySearchComponent} from './components/quality-search/quality-search.component';
import {QualityRoutingModule} from './quality-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QualityFormComponent } from './components/quality-form/quality-form.component';
import { ModalQualityComponent } from './components/modal-quality/modal-quality.component';

@NgModule({
  imports: [
    CommonModule,
    QualityRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    QualityComponent,
    ListQualityComponent,
    QualitySearchComponent,
    QualityFormComponent,
    ModalQualityComponent
  ],
  entryComponents: [
    ModalQualityComponent
  ]
})
export class QualityModule {
}
