import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ObjectId} from "../../../../models/object-id.model";
import {OrderTemp} from "../../models/order-temp";
import {OrdersService} from "../../service/orders.service";
import {Company} from "../../../../models/company/company.model";
import {EmployeesService} from "../../../employees/service/employees.service";

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
  public statusCompanySearchForm: boolean;
  public companyId: ObjectId;
  public statusCustomerSearchForm: boolean;
  public customerId: ObjectId;
  public statusPaperboardSearchForm: boolean;
  public paperboardId: ObjectId;
  public statusFiscalDataSearchForm: boolean;
  public fiscalDataId: ObjectId;

  public responseCompanySearch: Company;

  constructor(private formBuilder: FormBuilder,
              private ordersService: OrdersService,
              private employeesService: EmployeesService) {

    this.statusBoxSearchForm = true;
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

  recipeCompanySearchStatusForm(event) {
    this.statusCompanySearchForm = event.status;
    this.companyId = event._id;
    this.responseCompanySearch = event.response.item;
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
      employeId: this.employeesService.currentEmployee._id,
      companyId: this.companyId,
      customerId: this.customerId,
      fiscalDataId: this.fiscalDataId,
      noOrder: this.generateNoOrder(),
      numBoxes: this.orderForm.controls.numBoxes.value, // TODO => Checar bien como se llama este modelo en base de datos
      observations: this.orderForm.controls.observations.value,
      kgMinLinier: this.orderForm.controls.kgMinLinier.value,
      kgMinKraft: this.orderForm.controls.kgMinKraft.value,
      total: 100, // TODO => No hardcodear esto
      subtotal: 50 // TODO => No hardcodear esto
    };

    console.log(order);
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

  generateNoOrder(): string {
    const customerQuoteNumber: string = this.generateRandom(1000).toString();
    const companyName: string = 'C'; // TODO => Este es el codigo ocorrecto: this.responseCompanySearch.code;
    const providerCode: string = '6'; // TODO => this.responseSupplierSearch.code;
    const monthOrderReceived: string = this.getMonthCodeCompermex(new Date().getMonth()); // TODO => verifica zonas horrias
    const year: string = this.getCompermexYearCode(new Date().getFullYear());
    const consecutiveOfTheCustomersOrderInTheMonth: string = this.generateRandom(1000).toString().slice(-2);
    // const inCaseOfBeingACombinedMaterial: string = '123';

    const result: string = customerQuoteNumber.concat(
      companyName,
      providerCode,
      monthOrderReceived,
      year,
      consecutiveOfTheCustomersOrderInTheMonth      // inCaseOfBeingACombinedMaterial
    );

    return result;
  }

  generateRandom(digits: number): number {
    const val = Math.floor(digits + Math.random() * 9000);
    console.log(val);

    return val;
  }

  getMonthCodeCompermex(month: number): string {
    console.log(month);
    let monthCode = '';

    if (month === 0) {
      monthCode = 'A'
    }
    if (month === 1) {
      monthCode = 'C'
    }
    if (month === 2) {
      monthCode = 'D'
    }
    if (month === 3) {
      monthCode = 'E'
    }
    if (month === 4) {
      monthCode = 'F'
    }
    if (month === 5) {
      monthCode = 'G'
    }
    if (month === 6) {
      monthCode = 'H'
    }
    if (month === 7) {
      monthCode = 'I'
    }
    if (month === 8) {
      monthCode = 'J'
    }
    if (month === 9) {
      monthCode = 'K'
    }
    if (month === 10) {
      monthCode = 'L'
    }
    if (month === 10) {
      monthCode = 'M'
    }

    return monthCode;
  }

  getCompermexYearCode(year: number): string {
    const yearString: string = String(year);
    const result: string = yearString.slice(-1);

    return result;
  }

}
