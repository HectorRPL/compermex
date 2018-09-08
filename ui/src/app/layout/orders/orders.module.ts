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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuppliersFormComponent} from '../components/suppliers-form/suppliers-form.component';
import {DirectionsFormComponent} from '../components/directions-form/directions-form.component';
import {MaterialsFormComponent} from "../components/materials-form/materials-form.component";
import {ModalOrderComponent} from './components/modal-order/modal-order.component';
import {ModalDirectionComponent} from './components/modal-direction/modal-direction.component';
import {ModalMaterialsComponent} from './components/modal-materials/modal-materials.component';

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
    DirectionsFormComponent,
    MaterialsFormComponent,
    ModalOrderComponent,
    ModalDirectionComponent,
    ModalMaterialsComponent
  ],
  entryComponents: [
    ModalOrderComponent,
    ModalDirectionComponent,
    ModalMaterialsComponent
  ],
})
export class OrdersModule {
}
