import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersComponent} from './orders.component';
import {CreateOrderComponent} from './components/create-order/create-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: 'create', component: CreateOrderComponent
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
