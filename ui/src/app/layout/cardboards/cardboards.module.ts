import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardboardsComponent} from './components/cardboards/cardboards.component';
import {AddMaterialComponent} from './views/add-material/add-material.component';
import {ListMaterialsComponent} from './views/list-materials/list-materials.component';
import {CardboardsFormComponent} from './components/cardboards-form/cardboards-form.component';
import {CardboardsSearchComponent} from './components/cardboards-search/cardboards-search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomersRoutingModule} from './cardboards-routing.module';

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
    AddMaterialComponent,
    ListMaterialsComponent,
    CardboardsFormComponent,
    CardboardsSearchComponent
  ]
})
export class CardboardsModule {
}
