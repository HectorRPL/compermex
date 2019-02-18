import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuppliersSearchComponent} from './components/suppliers-search/suppliers-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {CustomersSearchComponent} from './components/customers-search/customers-search.component';
import {CompanySearchComponent} from './components/company-search/company-search.component';
import {EmployeessSearchComponent} from './components/employeess-search/employeess-search.component';
import {PaperboardsSearchComponent} from './components/paperboards-search/paperboards-search.component';
import {BoxesSearchComponent} from './components/boxes-search/boxes-search.component';
import { MaterialColorsSearchComponent } from './components/material-colors-search/material-colors-search.component';
import { MaterialStrengthsSearchComponent } from './components/material-strengths-search/material-strengths-search.component';
import { MaterialTypesSearchComponent } from './components/material-types-search/material-types-search.component';

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
    PaperboardsSearchComponent,
    BoxesSearchComponent,
    MaterialColorsSearchComponent,
    MaterialStrengthsSearchComponent,
    MaterialTypesSearchComponent
  ],
  exports: [
    SuppliersSearchComponent,
    CustomersSearchComponent,
    CompanySearchComponent,
    EmployeessSearchComponent,
    PaperboardsSearchComponent,
    BoxesSearchComponent,
    MaterialColorsSearchComponent,
    MaterialStrengthsSearchComponent,
    MaterialTypesSearchComponent
  ]
})
export class SearchesModule {
}
