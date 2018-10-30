import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomersComponent} from "./components/customers/customers.component";
import {AddCustomerComponent} from "./views/add-customer/add-customer.component";
import {ListCustomersComponent} from "./views/list-customers/list-customers.component";


const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: 'list', component: ListCustomersComponent
      },
      {
        path: 'add', component: AddCustomerComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
