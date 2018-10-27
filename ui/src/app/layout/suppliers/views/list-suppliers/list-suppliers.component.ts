import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../../../models/supplier/supplier.model";
import {Observable} from "rxjs/index";
import {SupplierService} from "../../service/supplier.service";

@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})
export class ListSuppliersComponent implements OnInit {

  suppliers$: Observable<Supplier[]>;

  constructor(private supplierServ: SupplierService) {
  }

  ngOnInit() {
    this.suppliers$ = this.supplierServ.searchSuppliers('adasd');

  }

}
