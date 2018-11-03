import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardboardsComponent} from './components/cardboards/cardboards.component';
import {CardboardsFormComponent} from './components/cardboards-form/cardboards-form.component';
import {CardboardsSearchComponent} from './components/cardboards-search/cardboards-search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomersRoutingModule} from './cardboards-routing.module';
import { AddCardboardComponent } from './views/add-cardboard/add-cardboard.component';
import { ListCardboardsComponent } from './views/list-cardboards/list-cardboards.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CardboardsComponent,
    CardboardsFormComponent,
    CardboardsSearchComponent,
    AddCardboardComponent,
    ListCardboardsComponent
  ]
})
export class CardboardsModule {
}
