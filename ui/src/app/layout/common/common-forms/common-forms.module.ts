import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddressFormComponent} from './address-form/address-form.component';
import {FiscalDataFormComponent} from './fiscal-data-form/fiscal-data-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddressFormComponent,
    FiscalDataFormComponent
  ],
  exports: [
    AddressFormComponent,
    FiscalDataFormComponent
  ]
})
export class CommonFormsModule {
}
