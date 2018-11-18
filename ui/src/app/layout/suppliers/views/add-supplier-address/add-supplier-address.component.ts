import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Direction} from '../../../../models/direction.model';
import {SupplierService} from '../../service/supplier.service';
import {Supplier} from "../../models/supplier/supplier.model";

@Component({
  selector: 'app-add-supplier-address',
  templateUrl: './add-supplier-address.component.html',
  styleUrls: ['./add-supplier-address.component.css']
})
export class AddSupplierAddressComponent implements OnInit {

  supplierId: string;

  constructor(
    private supplierService: SupplierService,
    private router: Router) {
  }

  ngOnInit() {
  }

  createDirection(direction: Direction) {
    this.supplierService.addSupplierDirection(direction, this.supplierId).subscribe({
      next: (result) => {

      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }


}
