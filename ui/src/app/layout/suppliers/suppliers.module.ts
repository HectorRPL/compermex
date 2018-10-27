import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuppliersRoutingModule} from './suppliers-routing.module';
import {SuppliersComponent} from './components/suppliers/suppliers.component';
import {ListSuppliersComponent} from './views/list-suppliers/list-suppliers.component';
import { AddSupplierComponent } from './views/add-supplier/add-supplier.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuppliersRoutingModule
  ],
  declarations: [
    SuppliersComponent,
    ListSuppliersComponent,
    AddSupplierComponent
  ],
  providers: []
})
export class SuppliersModule {
}
