import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersRoutingModule} from './orders-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanySearchComponent} from '../components/searches/company-search/company-search.component';
import {CardboardSearchComponent} from '../components/searches/cardboard-search/cardboard-search.component';
import {ClientsFormComponent} from '../suppliers/components/clients-form/clients-form.component';
import {ListOrdersComponent} from './views/list-orders/list-orders.component';
import {AddOrderComponent} from './views/add-order/add-order.component';
import {OrdersComponent} from './components/orders/orders.component';
import {MaterialsSearchComponent} from '../components/searches/materials-search/materials-search.component';
import {DirectionsFormComponent} from './components/directions-form/directions-form.component';
import {FiscalDataFormComponent} from './components/fiscal-data-form/fiscal-data-form.component';
import {FiscalDataPhysicalPersonFormComponent} from './components/fiscal-data-physical-person-form/fiscal-data-physical-person-form.component';
import {FiscalDataMoralPersonFormComponent} from './components/fiscal-data-moral-person-form/fiscal-data-moral-person-form.component';
import {OrderFormComponent} from './components/order-form/order-form.component';
import {OrdersSearchComponent} from './components/orders-search/orders-search.component';
import {SuppliersSearchCopyComponent} from './components/suppliers-search-copy/suppliers-search-copy.component';
import { ClientsSearchCopyComponent } from './components/clients-search-copy/clients-search-copy.component';

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
    MaterialsSearchComponent,
    DirectionsFormComponent,
    FiscalDataFormComponent,
    FiscalDataPhysicalPersonFormComponent,
    FiscalDataMoralPersonFormComponent,
    OrderFormComponent,
    CompanySearchComponent,
    CardboardSearchComponent,
    ClientsFormComponent,
    ListOrdersComponent,
    AddOrderComponent,
    OrdersSearchComponent,
    SuppliersSearchCopyComponent,
    ClientsSearchCopyComponent
  ]
})
export class OrdersModule {
}
