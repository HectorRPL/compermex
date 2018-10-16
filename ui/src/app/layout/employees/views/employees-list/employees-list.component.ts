import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalEmployeesComponent} from '../../components/modal-employees/modal-employees.component';
import {Observable} from 'rxjs';
import {Employee} from '../../../../models/employee/employee';
import {EmployeesService} from '../../../../services/employees/employees.service';

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



  order() {
    const modalRef = this.modalService.open(ModalEmployeesComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;

  }

}
