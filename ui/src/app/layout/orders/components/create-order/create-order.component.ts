import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalOrderComponent} from '../modal-order/modal-order.component';
import {ModalDirectionComponent} from '../modal-direction/modal-direction.component';
import {ModalMaterialsComponent} from '../modal-materials/modal-materials.component';
import {ModalFiscalDataComponent} from '../modal-fiscal-data/modal-fiscal-data.component';

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

  openModalDirection() {
    const modalRef = this.modalService.open(ModalDirectionComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
  }

  openModalMaterials() {
    const modalRef = this.modalService.open(ModalMaterialsComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
  }

  openModalFiscalData() {
    const modalRef = this.modalService.open(ModalFiscalDataComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
  }

}
