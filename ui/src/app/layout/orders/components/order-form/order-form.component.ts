import {Component, OnInit} from '@angular/core';
import {Order} from "../../../../models/order";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ObjectId} from "../../../../models/object-id.model";
import {OrderTemp} from "../../models/order-temp";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public order: OrderTemp;
  orderForm: FormGroup;

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

  constructor(private formBuilder: FormBuilder) {

    this.statusBoxSearchForm = true;
    this.statusSupplerSearchForm = true;
    this.statusCompanySearchForm = true;
    this.statusCustomerSearchForm = true;
    this.statusPaperboardSearchForm = true;

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
      ])
    });
    /*
    this.orderForm = this.formBuilder.group({
      'customerOrder': new FormControl(this.order.customerOrder, [
        Validators.required
      ]),
      'saleOrder': new FormControl(this.order.saleOrder, [
        Validators.required
      ]),
      'providerKey01': new FormControl(this.order.providerKey01, [
        Validators.required
      ]),
      'orderDate': new FormControl(this.order.orderDate, [
        Validators.required
      ]),
      'deliverDate': new FormControl(this.order.deliverDate, [
        Validators.required
      ]),
      'customerDate': new FormControl(this.order.customerDate, [
        Validators.required
      ]),
      'paymentConditions': new FormControl(this.order.paymentConditions, [
        Validators.required
      ]),
      'providerKey02': new FormControl(this.order.providerKey02, [
        Validators.required
      ]),
      'type': new FormControl(this.order.type, [
        Validators.required
      ]),
      'color': new FormControl(this.order.color, [
        Validators.required
      ]),
      'strength': new FormControl(this.order.strength, [
        Validators.required
      ])
    });
    */
  }

  // [ini] Encabezado

  get noOrder() {
    return this.orderForm.get('noOrder');
  }

  get numBoxes() {
    return this.orderForm.get('numBoxes');
  }

  get customerOrder() {
    return this.orderForm.get('customerOrder');
  }

  get saleOrder() {
    return this.orderForm.get('saleOrder');
  }

  get providerKey01() {
    return this.orderForm.get('providerKey01');
  }

  get orderDate() {
    return this.orderForm.get('orderDate');
  }

  get deliverDate() {
    return this.orderForm.get('deliverDate');
  }

  get customerDate() {
    return this.orderForm.get('customerDate');
  }

  get paymentConditions() {
    return this.orderForm.get('paymentConditions');
  }

  get providerKey02() {
    return this.orderForm.get('providerKey02');
  }
  // [end] Encabezado

  padreCachaDisparoDelHijo(parametro) {
    console.log('Imprime lo que le manda el hijo', parametro);
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


}
