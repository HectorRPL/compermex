import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {SupplierService} from '../services/suppliers/supplier.service';
import {CompanyService} from '../services/company/company.service';
import {CardboardService} from '../services/cardboard/cardboard.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [
    SupplierService,
    CompanyService,
    CardboardService
  ]
})
export class LayoutModule {
}
