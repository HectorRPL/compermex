import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {SuppliersRoutingModule} from "./suppliers-routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuppliersComponent} from './components/suppliers/suppliers.component';
import {ListSuppliersComponent} from './views/list-suppliers/list-suppliers.component';
import {AddSupplierComponent} from './views/add-supplier/add-supplier.component';
import {SuppliersFormComponent} from './components/suppliers-form/suppliers-form.component';
import {SuppliersSearchComponent} from './components/suppliers-search/suppliers-search.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SuppliersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SuppliersComponent,
    ListSuppliersComponent,
    AddSupplierComponent,
    SuppliersFormComponent,
    SuppliersSearchComponent
  ]
})
export class SuppliersModule {
}
