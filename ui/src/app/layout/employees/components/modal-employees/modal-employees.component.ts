import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-employees',
  templateUrl: './modal-employees.component.html',
  styleUrls: ['./modal-employees.component.css']
})
export class ModalEmployeesComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
