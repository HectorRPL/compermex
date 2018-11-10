import {NgModule} from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from '@angular/common';
import {EmployeesRoutingModule} from './employees-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeesComponent} from "./components/employees/employees.component";
import {ListEmployeesComponent} from "./views/list-employees/list-employees.component";
import {AddEmployeeComponent} from "./views/add-employee/add-employee.component";
import {EmployeesFormComponent} from "./components/employees-form/employees-form.component";
import {SearchesModule} from "../searches/searches.module";

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SearchesModule
  ],
  declarations: [
    EmployeesComponent,
    ListEmployeesComponent,
    AddEmployeeComponent,
    EmployeesFormComponent
  ]
})
export class EmployeesModule {
}
