import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {Employee} from '../../../../models/employee/employee';
import {EmployeesService} from '../../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees$: Observable<Employee[]>;

  constructor(private modalService: NgbModal,
              private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.employees$ = this.employeesService.searchEmployees('searchEmployees');
  }

}
