import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReceptionComponent} from './components/reception/reception.component';
import {ListReceptionComponent} from './views/list-reception/list-reception.component';
import {ReceptionSearchComponent} from './components/reception-search/reception-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuppliersRoutingModule} from './reception-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReceptionComponent,
    ListReceptionComponent,
    ReceptionSearchComponent
  ]
})
export class ReceptionModule {
}
