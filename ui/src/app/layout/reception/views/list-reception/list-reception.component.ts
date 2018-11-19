import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../../service/reception.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {ModalReceivePaperboardComponent} from '../../components/modal-receive-paperboard/modal-receive-paperboard.component';
import {SaleOrder} from '../../../orders/models/sale-order.model';

@Component({
  selector: 'app-list-reception',
  templateUrl: './list-reception.component.html',
  styleUrls: ['./list-reception.component.css']
})
export class ListReceptionComponent implements OnInit {

  salesOrders$: Observable<SaleOrder[]>;

  constructor(private receptionService: ReceptionService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.salesOrders$ = this.receptionService.getSalesOrders();

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
