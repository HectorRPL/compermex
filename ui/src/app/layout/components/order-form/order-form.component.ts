import {Component, OnInit} from '@angular/core';
import {Order} from "../../../models/order";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {getBrowserLoggingCb} from "@angular-devkit/build-angular";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public order: Order;
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.order = new Order();

  }

  ngOnInit() {

    this.createOrderForm();

  }

  createOrderForm() {
    this.orderForm = this.formBuilder.group({
      // [ini] Encabezado
      'companyId': new FormControl(this.order.company, [
        Validators.required
      ]),
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
      // [end] Encabezado

      // [ini] los tres selects del material
      'type': new FormControl(this.order.type, [
        Validators.required
      ]),
      'color': new FormControl(this.order.color, [
        Validators.required
      ]),
      'strength': new FormControl(this.order.strength, [
        Validators.required
      ])
      // [end] los tres selects del material
    });
  }

  // [ini] Encabezado

  get company() {
    return this.orderForm.get('company');
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

}
