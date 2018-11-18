import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.supplierId = this.route.snapshot.paramMap.get('supplierId');
    });
  }



  createAddress(address: Address) {
    this.supplierService.addSupplierAddress(address, this.supplierId).subscribe({
      next: (result: Address) => {

        this.router.navigate([`/layout/suppliers/${result._id.$oid}/add/fiscalData`]);

      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }


}
