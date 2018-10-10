import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalOrderComponent} from '../modal-order/modal-order.component';
import {ModalDirectionComponent} from '../modal-direction/modal-direction.component';
import {ModalMaterialsComponent} from '../modal-materials/modal-materials.component';
import {ModalFiscalDataPhysicalPersonComponent} from '../modal-fiscal-data-physical-person/modal-fiscal-data-physical-person.component';
import {ModalFiscalDataMoralPersonComponent} from '../modal-fiscal-data-moral-person/modal-fiscal-data-moral-person.component';
import {ModalSuppliersComponent} from '../modal-suppliers/modal-suppliers.component';

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

  order() {
    const modalRef = this.modalService.open(ModalOrderComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;

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
