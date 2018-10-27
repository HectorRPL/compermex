import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EmployeesService} from "../../service/employees.service";
import {Employee} from "../../models/employee/employee";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees$: Observable<Employee[]>;

  constructor(private modalService: NgbModal,
              private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.employees$ = this.employeesService.searchEmployees('searchEmployees');
  }

}
