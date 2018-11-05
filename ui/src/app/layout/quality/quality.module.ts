import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QualityComponent} from './components/quality/quality.component';
import {ListQualityComponent} from './views/list-quality/list-quality.component';
import {QualitySearchComponent} from './components/quality-search/quality-search.component';
import {QualityRoutingModule} from './quality-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    QualitySearchComponent
  ]
})
export class QualityModule {
}
