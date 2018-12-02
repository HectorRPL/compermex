import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuppliersComponent} from './components/suppliers/suppliers.component';
import {ListSuppliersComponent} from './views/list-suppliers/list-suppliers.component';
import {AddSupplierComponent} from './views/add-supplier/add-supplier.component';
import {AddSupplierAddressComponent} from './views/add-supplier-address/add-supplier-address.component';
import {AddSupplierFiscalDataComponent} from './views/add-supplier-fiscal-data/add-supplier-fiscal-data.component';
import {AddSupplierInfoComponent} from './views/add-supplier-info/add-supplier-info.component';


const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent,
    children: [
      {
        path: 'list', component: ListSuppliersComponent
      },
      {
        path: 'add', component: AddSupplierComponent
      },
      {
        path: ':supplierId/add/address', component: AddSupplierAddressComponent
      },
      {
        path: ':supplierId/add/supplierInfo', component: AddSupplierInfoComponent
      },
      {
        path: ':supplierId/add/fiscalData', component: AddSupplierFiscalDataComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule {
}
