import { Component, OnInit } from '@angular/core';
import {QualityService} from '../../service/quality.service';
import {Quality} from '../../models/quality.model';
import {Observable} from 'rxjs/Observable';
import {SaleOrder} from "../../../orders/models/sale-order.model";
import {ReceptionService} from "../../../reception/service/reception.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalReceivePaperboardComponent} from "../../../reception/components/modal-receive-paperboard/modal-receive-paperboard.component";

@Component({
  selector: 'app-list-quality',
  templateUrl: './list-quality.component.html',
  styleUrls: ['./list-quality.component.css']
})
export class ListQualityComponent implements OnInit {

  salesOrders$: Observable<SaleOrder[]>;

  constructor(private receptionService: ReceptionService,
              private modalService: NgbModal) {
  }

  ngOnInit() {

    // this.salesOrders$ = this.receptionService.getSalesOrders();

  }

  openModalRecipe(saleOrder: SaleOrder) {
    const modalRef = this.modalService.open(
      ModalReceivePaperboardComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    modalRef.componentInstance.compraPartidaOrden = saleOrder;
  }

}
