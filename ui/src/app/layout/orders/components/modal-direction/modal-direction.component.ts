import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-direction',
  templateUrl: './modal-direction.component.html',
  styleUrls: ['./modal-direction.component.css']
})
export class ModalDirectionComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
