import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuppliersComponent} from './components/suppliers/suppliers.component';
import {ListSuppliersComponent} from './views/list-suppliers/list-suppliers.component';
import {AddSupplierComponent} from './views/add-supplier/add-supplier.component';
import {AddSupplierAddressComponent} from './views/add-supplier-address/add-supplier-address.component';


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
