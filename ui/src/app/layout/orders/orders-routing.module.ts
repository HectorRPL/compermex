import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersComponent} from './components/orders/orders.component';
import {ListOrdersComponent} from './views/list-orders/list-orders.component';
import {AddOrderComponent} from './views/add-order/add-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: 'add', component: AddOrderComponent
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
