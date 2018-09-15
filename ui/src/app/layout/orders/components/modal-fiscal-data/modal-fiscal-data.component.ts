import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-fiscal-data',
  templateUrl: './modal-fiscal-data.component.html',
  styleUrls: ['./modal-fiscal-data.component.css']
})
export class ModalFiscalDataComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
