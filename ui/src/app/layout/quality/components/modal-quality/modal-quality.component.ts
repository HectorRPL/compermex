import {Component, Input, OnInit} from '@angular/core';
import {SaleOrder} from "../../../orders/models/sale-order.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ReceptionService} from "../../../reception/service/reception.service";
import {NgForm} from "@angular/forms";
import {Reception} from "../../../reception/models/reception.model";

@Component({
  selector: 'app-modal-quality',
  templateUrl: './modal-quality.component.html',
  styleUrls: ['./modal-quality.component.css']
})
export class ModalQualityComponent implements OnInit {

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

  getDataQualityForm(dataForm: NgForm) {
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
