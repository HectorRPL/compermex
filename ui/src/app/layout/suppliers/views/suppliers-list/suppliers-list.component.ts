import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Supplier} from '../../../../models/supplier/supplier.model';
import {SupplierService} from "../../../../services/suppliers/supplier.service";

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {

  suppliers$: Observable<Supplier[]>;

  constructor(private supplierServ: SupplierService) {
  }

  ngOnInit() {
    this.suppliers$ = this.supplierServ.searchSuppliers('adasd');

  }

}
