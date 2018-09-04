import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalOrderComponent} from "../modal-order/modal-order.component";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openModalOrder() {
    const modalRef = this.modalService.open(ModalOrderComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;

  }

}
