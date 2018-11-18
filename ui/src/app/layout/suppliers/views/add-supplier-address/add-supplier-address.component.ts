import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SupplierService} from '../../service/supplier.service';
import {Address} from '../../../../models/address.model';

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

  createAddress(address: Address) {
    this.supplierService.addSupplierAddress(address, this.supplierId).subscribe({
      next: (result: Address) => {

      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }


}
