import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SupplierService} from '../../service/supplier.service';
import {Supplier} from '../../models/supplier/supplier.model';


@Component({
  selector: 'app-suppliers-search',
  templateUrl: './suppliers-search.component.html',
  styleUrls: ['./suppliers-search.component.css']
})
export class SuppliersSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private supplierServ: SupplierService) {

  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.supplierServ.getSuppliers().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Supplier) => x.name;
  inFormatter = (result: Supplier) => result.name;

  selectedItem($event) {
    console.log($event);
  }

}
