import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersComponent} from './components/orders/orders.component';
import {CreateOrderComponent} from './components/create-order/create-order.component';
import {ListOrdersComponent} from './views/list-orders/list-orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: 'create', component: CreateOrderComponent
      },
      {
        path: 'list', component: ListOrdersComponent
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
