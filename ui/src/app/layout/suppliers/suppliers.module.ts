import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuppliersRoutingModule} from './suppliers-routing.module';
import {SuppliersComponent} from './suppliers.component';
import {SuppliersFormComponent} from '../components/suppliers-form/suppliers-form.component';
import {SuppliersListComponent} from './views/suppliers-list/suppliers-list.component';

@NgModule({
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SuppliersComponent,
    SuppliersFormComponent,
    SuppliersListComponent
  ],
  providers:[

  ]
})
export class SuppliersModule {
}
