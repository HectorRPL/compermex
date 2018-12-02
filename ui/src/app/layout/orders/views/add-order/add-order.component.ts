import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Order} from '../../../../models/order';
import {OrdersService} from '../../../../services/orders/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.orders$ = this.ordersService.searchOrders('searchOrders');
  }

}
