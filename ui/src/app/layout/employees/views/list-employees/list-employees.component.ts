import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '../../../../services/employees/employees.service';
import {Employee} from '../../models/employee/employee';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees$: Observable<Employee[]>;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
  }

}
