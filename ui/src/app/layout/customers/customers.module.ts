import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './components/customers/customers.component';
import {AddCustomerComponent} from './views/add-customer/add-customer.component';
import {CustomersFormComponent} from './components/customers-form/customers-form.component';
import {CustomersSearchComponent} from './components/customers-search/customers-search.component';
import {ListCustomersComponent} from './views/list-customers/list-customers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomersRoutingModule} from './customers-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    CustomersFormComponent,
    CustomersSearchComponent,
    ListCustomersComponent
  ]
})
export class CustomersModule {
}
