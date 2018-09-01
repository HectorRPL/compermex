import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from './orders.component';
import {CreateOrderComponent} from './components/create-order/create-order.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {SuppliersSearchComponent} from '../components/searches/suppliers-search/suppliers-search.component';
import {MaterialsSearchComponent} from '../components/searches/materials-search/materials-search.component';
import {ClientsSearchComponent} from '../components/searches/clients-search/clients-search.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrdersComponent,
    CreateOrderComponent,
    SuppliersSearchComponent,
    MaterialsSearchComponent,
    ClientsSearchComponent
  ]
})
export class OrdersModule {
}
