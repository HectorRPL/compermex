import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {ReceptionService} from '../../service/reception.service';
import {Reception} from '../../models/reception.model';
import {SaleOrder} from '../../../orders/models/sale-order.model';


@Component({
  selector: 'app-modal-receive-paperboard',
  templateUrl: './modal-receive-paperboard.component.html',
  styleUrls: ['./modal-receive-paperboard.component.css']
})
export class ModalReceivePaperboardComponent implements OnInit {

  @Input() saleOrder: SaleOrder;

  public showAlert: boolean;
  public message: string;
  public alertType: string;

  constructor(public activeModal: NgbActiveModal,
              private receptionService: ReceptionService) {

    this.showAlert = false;
    this.message = '';
    this.alertType = '';

  }

  ngOnInit() {

    console.log('Recibiendo la order de la lista de salesOrders');
    console.log(this.saleOrder);

  }

  getReceivePaperboardForm(dataForm: NgForm) {
    this.add(dataForm);
  }

  add(dataForm) {
    this.receptionService.addReception(this.fillModel(dataForm)).subscribe({
      next: (result) => {
        console.log(result);
        this.showAlert = true;
        this.message = 'Se guardó con éxito';
        this.alertType = 'success';
      },
      error: (error: any) => {
        console.log(error);
        this.showAlert = true;
        this.message = 'No se guardó';
        this.alertType = 'danger';
      }
    });
  }

  fillModel(dataForm: NgForm): Reception {

    // const formModel = this.receptionService.value;

    const reception: Reception = {
      numProductsReceived: dataForm.controls.numProductsReceived.value
    } as Reception;


    return reception;
  }

}
