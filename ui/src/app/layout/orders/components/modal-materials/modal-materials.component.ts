import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-materials',
  templateUrl: './modal-materials.component.html',
  styleUrls: ['./modal-materials.component.css']
})
export class ModalMaterialsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
