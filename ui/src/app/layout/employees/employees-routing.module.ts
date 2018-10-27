import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from "./components/employees/employees.component";
import {AddEmployeeComponent} from './views/add-employee/add-employee.component';
import {ListEmployeesComponent} from "./views/list-employees/list-employees.component";


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      {
        path: 'list', component: ListEmployeesComponent
      },
      {
        path: 'add', component: AddEmployeeComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {
}
