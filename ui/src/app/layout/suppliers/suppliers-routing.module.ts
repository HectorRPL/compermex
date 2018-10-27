import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuppliersComponent} from './components/suppliers/suppliers.component';
import {ListSuppliersComponent} from './views/list-suppliers/list-suppliers.component';
import {AddSupplierComponent} from './views/add-supplier/add-supplier.component';


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
