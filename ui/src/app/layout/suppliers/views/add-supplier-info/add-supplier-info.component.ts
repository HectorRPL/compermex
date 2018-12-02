import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SupplierInfo} from "../../../../models/supplier-info/supplier-info.model";
import {ObjectId} from "../../../../models/object-id.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SuppliersInfoService} from "../../../../services/suppliers-info/suppliers-info.service";

@Component({
  selector: 'app-add-supplier-info',
  templateUrl: './add-supplier-info.component.html',
  styleUrls: ['./add-supplier-info.component.css']
})
export class AddSupplierInfoComponent implements OnInit {

  public supplierId: string;

  constructor(private suppliersInfoService: SuppliersInfoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.supplierId = this.route.snapshot.paramMap.get('supplierId');
    });
  }

  recipeSupplierInfoForm(form: NgForm) {
    this.addSuppliersInfo(form);
  }

  addSuppliersInfo(form: NgForm) {

    this.suppliersInfoService.addSuppliersInfo(this.fillSupplierInfo(form), this.supplierId).subscribe({
      next: (result: SupplierInfo) => {

        this.router.navigate([`/layout/suppliers/${this.supplierId}/add/fiscalData`]);

      },
      error: (error: any) => { // TODO => Nunca cacho el error y siempre me dice que está bien, debo cachar bien el error
        console.log(error);
      }
    });
  }

  fillSupplierInfo(form: NgForm): SupplierInfo {

    const supplierInfo: SupplierInfo = {
      supplierId: new ObjectId(this.supplierId),
      creditDays: form.controls.creditDays.value,
      qualityCertificate: form.controls.qualityCertificate.value,
      price: form.controls.price.value,
      minLong: form.controls.minLong.value,
      maxLong: form.controls.maxLong.value,
      minHigh: form.controls.minHigh.value,
      maxHigh: form.controls.maxHigh.value,
      minSquareMeters: form.controls.minSquareMeters.value,
    } as SupplierInfo;

    return supplierInfo;
  }


}
