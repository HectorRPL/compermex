import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-clients',
  templateUrl: './modal-clients.component.html',
  styleUrls: ['./modal-clients.component.css']
})
export class ModalClientsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
