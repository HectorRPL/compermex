import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuppliersSearchComponent} from './components/suppliers-search/suppliers-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {CustomersSearchComponent} from './components/customers-search/customers-search.component';
import {CompanySearchComponent} from './components/company-search/company-search.component';

@NgModule({
  imports: [
    RouterModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SuppliersSearchComponent,
    CustomersSearchComponent,
    CompanySearchComponent
  ],
  exports: [
    SuppliersSearchComponent,
    CustomersSearchComponent,
    CompanySearchComponent
  ]
})
export class SearchesModule {
}
