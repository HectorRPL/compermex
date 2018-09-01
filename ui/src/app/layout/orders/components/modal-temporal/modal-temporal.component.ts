import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-temporal',
  templateUrl: './modal-temporal.component.html',
  styleUrls: ['./modal-temporal.component.css']
})
export class ModalTemporalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
