import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SupplierInfo} from '../../../../models/supplier-info/supplier-info.model';

@Component({
  selector: 'app-supplier-info-form',
  templateUrl: './supplier-info-form.component.html',
  styleUrls: ['./supplier-info-form.component.css']
})
export class SupplierInfoFormComponent implements OnInit {

  @Output() public returnsSupplierInfoForm = new EventEmitter();
  public supplierInfo: SupplierInfo;
  public supplierInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.supplierInfo = new SupplierInfo();

  }

  ngOnInit() {

    this.createSupplierInfoForm();

  }

  createSupplierInfoForm() {
    this.supplierInfoForm = this.formBuilder.group({
      'creditDays': new FormControl(this.supplierInfo.creditDays, [
        Validators.required,
        Validators.min(0)
      ]),
      'qualityCertificate': new FormControl(this.supplierInfo.qualityCertificate, [
        Validators.required
      ]),
      'price': new FormControl(this.supplierInfo.price, [
        Validators.required,
        Validators.min(0)
      ]),
      'minLong': new FormControl(this.supplierInfo.minLong, [
        Validators.required,
        Validators.min(0)
      ]),
      'maxLong': new FormControl(this.supplierInfo.maxLong, [
        Validators.required,
        Validators.min(0)
      ]),
      'minHigh': new FormControl(this.supplierInfo.minHigh, [
        Validators.required,
        Validators.min(0)
      ]),
      'maxHigh': new FormControl(this.supplierInfo.maxHigh, [
        Validators.required,
        Validators.min(0)
      ]),
      'minSquareMeters': new FormControl(this.supplierInfo.minSquareMeters, [
        Validators.required,
        Validators.min(0)
      ]),
    });
  }

  get creditDays() {
    return this.supplierInfoForm.get('creditDays');
  }

  /*
  Debo investigar por qué no es necesaria esta línea cuando son boolean
  get qualityCertificate() {
    return this.supplierInfoForm.get('qualityCertificate');
  }
  */

  get price() {
    return this.supplierInfoForm.get('price');
  }

  get minLong() {
    return this.supplierInfoForm.get('minLong');
  }

  get maxLong() {
    return this.supplierInfoForm.get('maxLong');
  }

  get minHigh() {
    return this.supplierInfoForm.get('minHigh');
  }

  get maxHigh() {
    return this.supplierInfoForm.get('maxHigh');
  }

  get minSquareMeters() {
    return this.supplierInfoForm.get('minSquareMeters');
  }

  nextSupplierInfoForm() {
    this.returnsSupplierInfoForm.emit(this.supplierInfoForm);
  }

}
