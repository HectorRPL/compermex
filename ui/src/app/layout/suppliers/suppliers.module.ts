import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {SuppliersRoutingModule} from './suppliers-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuppliersComponent} from './components/suppliers/suppliers.component';
import {ListSuppliersComponent} from './views/list-suppliers/list-suppliers.component';
import {AddSupplierComponent} from './views/add-supplier/add-supplier.component';
import {SuppliersFormComponent} from './components/suppliers-form/suppliers-form.component';
import {SearchesModule} from '../searches/searches.module';
import {CommonFormsModule} from '../common/common-forms/common-forms.module';
import {AddSupplierAddressComponent} from './views/add-supplier-address/add-supplier-address.component';
import {AddSupplierFiscalDataComponent} from './views/add-supplier-fiscal-data/add-supplier-fiscal-data.component';
import {AddSupplierInfoComponent} from './views/add-supplier-info/add-supplier-info.component';
import {SupplierInfoFormComponent} from './components/supplier-info-form/supplier-info-form.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SuppliersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SearchesModule,
    CommonFormsModule
  ],
  declarations: [
    SuppliersComponent,
    ListSuppliersComponent,
    AddSupplierComponent,
    SuppliersFormComponent,
    AddSupplierAddressComponent,
    AddSupplierFiscalDataComponent,
    AddSupplierInfoComponent,
    SupplierInfoFormComponent
  ]
})
export class SuppliersModule {
}
