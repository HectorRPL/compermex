import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from './orders.component';
import {CreateOrderComponent} from './components/create-order/create-order.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {SuppliersSearchComponent} from '../components/searches/suppliers-search/suppliers-search.component';
import {MaterialsSearchComponent} from '../components/searches/materials-search/materials-search.component';
import {ClientsSearchComponent} from '../components/searches/clients-search/clients-search.component';
import {OrderHeaderComponent} from '../components/searches/order-header/order-header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SuppliersFormComponent} from '../components/suppliers-form/suppliers-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalOrderComponent} from './components/modal-order/modal-order.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    OrdersComponent,
    CreateOrderComponent,
    SuppliersSearchComponent,
    MaterialsSearchComponent,
    ClientsSearchComponent,
    OrderHeaderComponent,
    SuppliersFormComponent,
    ModalOrderComponent
  ],
  entryComponents: [
    ModalOrderComponent
  ],
})
export class OrdersModule {
}
