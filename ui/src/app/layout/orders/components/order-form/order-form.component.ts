import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ObjectId} from "../../../../models/object-id.model";
import {OrderTemp} from "../../models/order-temp";
import {OrdersService} from "../../service/orders.service";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public showAlert: boolean;
  public message: string;
  public alertType: string;

  public order: OrderTemp;
  public orderForm: FormGroup;

  public statusBoxSearchForm: boolean;
  public boxId: ObjectId;
  public statusSupplerSearchForm: boolean;
  public supplierId: ObjectId;
  public statusCompanySearchForm: boolean;
  public companyId: ObjectId;
  public statusCustomerSearchForm: boolean;
  public customerId: ObjectId;
  public statusPaperboardSearchForm: boolean;
  public paperboardId: ObjectId;
  public statusFiscalDataSearchForm: boolean;
  public fiscalDataId: ObjectId;

  constructor(private formBuilder: FormBuilder,
              private ordersService: OrdersService) {

    this.statusBoxSearchForm = true;
    this.statusSupplerSearchForm = true;
    this.statusCompanySearchForm = true;
    this.statusCustomerSearchForm = true;
    this.statusPaperboardSearchForm = true;
    this.statusFiscalDataSearchForm = true;

    this.showAlert = false;
    this.message = '';

    this.order = new OrderTemp();

  }

  ngOnInit() {

    this.createOrderForm();

  }

  createOrderForm() {
    this.orderForm = this.formBuilder.group({
      'noOrder': new FormControl(this.order.noOrder, [
        Validators.required
      ]),
      'numBoxes': new FormControl(this.order.numBoxes, [
        Validators.required
      ]),
      'observations': new FormControl(this.order.observations, [
        Validators.required
      ]),
      'kgMinLinier': new FormControl(this.order.kgMinLinier, [
        Validators.required
      ]),
      'kgMinKraft': new FormControl(this.order.kgMinKraft, [
        Validators.required
      ])
    });
  }

  get noOrder() {
    return this.orderForm.get('noOrder');
  }

  get numBoxes() {
    return this.orderForm.get('numBoxes');
  }

  get observations() {
    return this.orderForm.get('observations');
  }

  get kgMinLinier() {
    return this.orderForm.get('kgMinLinier');
  }

  get kgMinKraft() {
    return this.orderForm.get('kgMinKraft');
  }

  recipeBoxSearchStatusForm(event) {
    this.statusBoxSearchForm = event.status;
    this.boxId = event._id;
  }

  recipeSupplerSearchStatusForm(event) {
    this.statusSupplerSearchForm = event.status;
    this.supplierId = event._id;
  }

  recipeCompanySearchStatusForm(event) {
    this.statusCompanySearchForm = event.status;
    this.companyId = event._id;
  }

  recipeCustomerSearchStatusForm(event) {
    this.statusCustomerSearchForm = event.status;
    this.customerId = event._id;
  }

  recipePaperboardSearchStatusForm(event) {
    this.statusPaperboardSearchForm = event.status;
    this.paperboardId = event._id;
  }

  recipeDataFiscalSearchStatusForm(event) {
    this.statusFiscalDataSearchForm = event.status;
    this.fiscalDataId = event._id;
  }

  orderAction() {

    const order: OrderTemp = {
      boxId: this.boxId,
      supplierId: this.supplierId,
      companyId: this.companyId,
      customerId: this.customerId,
      paperboardId: this.paperboardId,
      fiscalDataId: this.fiscalDataId,
      noOrder: this.orderForm.controls.noOrder.value,
      numBoxes: this.orderForm.controls.numBoxes.value,
      observations: this.orderForm.controls.observations.value,
      kgMinLinier: this.orderForm.controls.kgMinLinier.value,
      kgMinKraft: this.orderForm.controls.kgMinKraft.value,
    };

    this.ordersService.addOrder(order).subscribe({
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

}
