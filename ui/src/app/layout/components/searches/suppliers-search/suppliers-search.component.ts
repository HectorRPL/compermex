import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SupplierService} from '../../../../services/suppliers/supplier.service';
import {Supplier} from '../../../../models/supplier/supplier.model';
import {ModalSuppliersComponent} from "../../../orders/components/modal-suppliers/modal-suppliers.component";


@Component({
  selector: 'app-suppliers-search',
  templateUrl: './suppliers-search.component.html',
  styleUrls: ['./suppliers-search.component.css']
})
export class SuppliersSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private supplierServ: SupplierService,
              private modalService: NgbModal) {

  }

  addSupplierModal() {
    const modalRef = this.modalService.open(ModalSuppliersComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
    // modalRef.componentInstance.compraPartidaOrden = compraPartidaOrden;
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

}
