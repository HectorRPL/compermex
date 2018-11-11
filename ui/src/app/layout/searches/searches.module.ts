import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuppliersSearchComponent} from './components/suppliers-search/suppliers-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {CustomersSearchComponent} from './components/customers-search/customers-search.component';
import {CompanySearchComponent} from './components/company-search/company-search.component';
import {EmployeessSearchComponent} from './components/employeess-search/employeess-search.component';
import {PaperboardsSearchComponent} from "./components/paperboards-search/paperboards-search.component";

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
    CompanySearchComponent,
    EmployeessSearchComponent,
    PaperboardsSearchComponent
  ],
  exports: [
    SuppliersSearchComponent,
    CustomersSearchComponent,
    CompanySearchComponent,
    EmployeessSearchComponent,
    PaperboardsSearchComponent
  ]
})
export class SearchesModule {
}
