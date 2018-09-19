import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-fiscal-data-physical-person',
  templateUrl: './modal-fiscal-data-physical-person.component.html',
  styleUrls: ['./modal-fiscal-data-physical-person.component.css']
})
export class ModalFiscalDataPhysicalPersonComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
