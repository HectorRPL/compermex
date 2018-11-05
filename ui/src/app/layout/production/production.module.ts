import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductionComponent} from './components/production/production.component';
import {ProductionSearchComponent} from './components/production-search/production-search.component';
import {ListProductionComponent} from './views/list-production/list-production.component';
import {ProductionRoutingModule} from "./production-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ProductionRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductionComponent,
    ProductionSearchComponent,
    ListProductionComponent
  ]
})
export class ProductionModule {
}
