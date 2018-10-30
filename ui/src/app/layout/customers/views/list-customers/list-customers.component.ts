import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Customer} from "../../../../models/customer/customer.model";
import {CustomersService} from "../../service/customers.service";

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private customersService: CustomersService) {
  }

  ngOnInit() {
    this.customers$ = this.customersService.searchCustomers('searchCustomers');
  }

}
