import { Component, OnInit } from '@angular/core';
import {QualityService} from '../../../../services/qualities/quality.service';
import {Observable} from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalQualityComponent} from '../../components/modal-quality/modal-quality.component';
import {PurchaseOrder} from '../../../orders/models/buy-order.model';

@Component({
  selector: 'app-list-quality',
  templateUrl: './list-quality.component.html',
  styleUrls: ['./list-quality.component.css']
})
export class ListQualityComponent implements OnInit {

  purcharsesOrders$: Observable<PurchaseOrder[]>;

  constructor(private qualityService: QualityService,
              private modalService: NgbModal) {
  }

  ngOnInit() {

    this.purcharsesOrders$ = this.qualityService.getPurcharsesOrders();

  }

  openModalRecipe(saleOrder: PurchaseOrder) {
    const modalRef = this.modalService.open(
      ModalQualityComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    modalRef.componentInstance.compraPartidaOrden = saleOrder;
  }

}
