import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';import {OrdersService} from "../../service/orders.service";
import {Order} from "../../../../models/order";

@Component({
  selector: 'app-orders-search',
  templateUrl: './orders-search.component.html',
  styleUrls: ['./orders-search.component.css']
})
export class OrdersSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private ordersService: OrdersService) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.ordersService.getOrders().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Order) => x;
  inFormatter = (result: Order) => result;

  selectedItem($event) {
    console.log($event);
  }

}
