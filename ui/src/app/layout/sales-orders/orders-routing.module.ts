import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalesOrdersComponent} from './components/sales-orders/sales-orders.component';
import {AddSalesOrdersComponent} from './views/add-sales-orders/add-sales-orders.component';
import {ListSalesOrdersComponent} from './views/list-sales-orders/list-sales-orders.component';

const routes: Routes = [
  {
    path: '',
    component: SalesOrdersComponent,
    children: [
      {
        path: 'add', component: AddSalesOrdersComponent
      },
      {
        path: 'list', component: ListSalesOrdersComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
