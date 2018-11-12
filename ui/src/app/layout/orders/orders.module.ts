import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersRoutingModule} from './orders-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListOrdersComponent} from './views/list-orders/list-orders.component';
import {AddOrderComponent} from './views/add-order/add-order.component';
import {OrdersComponent} from './components/orders/orders.component';
import {DirectionsFormComponent} from './components/directions-form/directions-form.component';
import {FiscalDataFormComponent} from './components/fiscal-data-form/fiscal-data-form.component';
import {FiscalDataPhysicalPersonFormComponent} from './components/fiscal-data-physical-person-form/fiscal-data-physical-person-form.component';
import {FiscalDataMoralPersonFormComponent} from './components/fiscal-data-moral-person-form/fiscal-data-moral-person-form.component';
import {OrderFormComponent} from './components/order-form/order-form.component';
import {OrdersSearchComponent} from './components/orders-search/orders-search.component';
import {SearchesModule} from '../searches/searches.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SearchesModule
  ],
  declarations: [
    OrdersComponent,
    DirectionsFormComponent,
    FiscalDataFormComponent,
    FiscalDataPhysicalPersonFormComponent,
    FiscalDataMoralPersonFormComponent,
    OrderFormComponent,
    ListOrdersComponent,
    AddOrderComponent,
    OrdersSearchComponent
  ]
})
export class OrdersModule {
}
