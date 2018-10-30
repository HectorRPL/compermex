import {Component} from '@angular/core';
import {SupplierService} from '../../../suppliers/service/supplier.service';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/index';
import {Supplier} from '../../../suppliers/models/supplier/supplier.model';

@Component({
  selector: 'app-suppliers-search-copy',
  templateUrl: './suppliers-search-copy.component.html',
  styleUrls: ['./suppliers-search-copy.component.css']
})
export class SuppliersSearchCopyComponent {

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

  resFormatter = (x: Supplier) => x.username;
  inFormatter = (result: Supplier) => result.username;

  selectedItem($event) {
    console.log($event);
  }

}
