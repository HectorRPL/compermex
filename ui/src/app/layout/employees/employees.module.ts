import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeesRoutingModule} from './employees-routing.module';
import {EmployeesComponent} from './employees.component';
import {EmployeesListComponent} from './views/employees-list/employees-list.component';
import {EmployeessSearchComponent} from '../components/searches/employeess-search/employeess-search.component';
import {ModalEmployeesComponent} from './components/modal-employees/modal-employees.component';
import {EmployeesFormComponent} from '../components/employees-form/employees-form.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeessSearchComponent,
    ModalEmployeesComponent,
    EmployeesFormComponent
  ],
  entryComponents: [
    ModalEmployeesComponent
  ]
})
export class EmployeesModule {
}
