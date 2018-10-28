import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalDirectionComponent} from '../modal-direction/modal-direction.component';
import {ModalMaterialsComponent} from '../modal-materials/modal-materials.component';
import {ModalFiscalDataPhysicalPersonComponent} from '../modal-fiscal-data-physical-person/modal-fiscal-data-physical-person.component';
import {ModalFiscalDataMoralPersonComponent} from '../modal-fiscal-data-moral-person/modal-fiscal-data-moral-person.component';

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

  directionForm() {
    const modalRef = this.modalService.open(ModalDirectionComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
  }

  materialsForm() {
    const modalRef = this.modalService.open(ModalMaterialsComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
  }

  fiscalDataPhysicalPersonForm() {
        const modalRef = this.modalService.open(ModalFiscalDataPhysicalPersonComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
  }

  fiscalDataMoralPersonForm() {
        const modalRef = this.modalService.open(ModalFiscalDataMoralPersonComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
  }

}
