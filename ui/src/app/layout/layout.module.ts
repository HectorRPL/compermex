import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SupplierService} from '../services/suppliers/supplier.service';
import {CompanyService} from '../services/company/company.service';
import {CardboardService} from '../services/cardboard/cardboard.service';
import {FooterComponent} from "./components/footer/footer.component";
import {TopNavbarComponent} from "./components/topnavbar/topnavbar.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {TopNavigationNavbarComponent} from "./components/topnavbar/topnavigationnavbar.component";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbDropdownModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    FooterComponent,
    TopNavbarComponent,
    NavigationComponent,
    TopNavigationNavbarComponent
  ],
  exports: [
    FooterComponent,
    TopNavbarComponent,
    NavigationComponent,
    TopNavigationNavbarComponent
  ],
  providers: [
    SupplierService,
    CompanyService,
    CardboardService
  ]
})
export class LayoutModule {
}
