import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MaterialsMaster} from '../../models/materials-master.model';

@Component({
  selector: 'app-materials-master-form',
  templateUrl: './materials-master-form.component.html',
  styleUrls: ['./materials-master-form.component.css']
})
export class MaterialsMastersMasterFormComponent implements OnInit {

  minSize: number;
  maxSize: number;

  public materialsMaster: MaterialsMaster;
  materialsMasterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.materialsMaster = new MaterialsMaster();
    this.minSize = 1;
    this.maxSize = 10;

  }

  ngOnInit() {

    this.createMaterialsMastersForm();

  }

  createMaterialsMastersForm() {
    this.materialsMasterForm = this.formBuilder.group({
      // PANEL ARTÍCULO
      'cia': new FormControl(this.materialsMaster.cia, [
        Validators.required
      ]),
      'key': new FormControl(this.materialsMaster.key, [
        Validators.required
      ]),
      'ourKey': new FormControl(this.materialsMaster.ourKey, [
        Validators.required
      ]),
      'type': new FormControl(this.materialsMaster.type, [
        Validators.required
      ]),
      'client': new FormControl(this.materialsMaster.client, [
        Validators.required
      ]),
      'businessName': new FormControl(this.materialsMaster.businessName, [
        Validators.required
      ]),
      'seller': new FormControl(this.materialsMaster.seller, [
        Validators.required
      ]),

      // <!--PANEL MEDIDAS-->
      'long': new FormControl(this.materialsMaster.long, [
        Validators.required,
        Validators.min(this.minSize),
        Validators.max(this.maxSize)
      ]),
      'width': new FormControl(this.materialsMaster.width, [
        Validators.required,
        Validators.min(this.minSize),
        Validators.max(this.maxSize)
      ]),
      'height': new FormControl(this.materialsMaster.height, [
        Validators.required,
        Validators.min(this.minSize),
        Validators.max(this.maxSize)
      ]),
      'slots': new FormControl(this.materialsMaster.slots, [
        Validators.required,
        Validators.min(this.minSize),
        Validators.max(this.maxSize)
      ]),

      // <!--PANEL ESPEFIFICACIONES DE MATERIAL-->
      'purchase': new FormControl(this.materialsMaster.purchase, [
        Validators.required
      ]),
      'sale': new FormControl(this.materialsMaster.sale, [
        Validators.required
      ]),
      'sellerPrice': new FormControl(this.materialsMaster.sellerPrice, [
        Validators.required
      ]),
      'maxPercentage': new FormControl(this.materialsMaster.maxPercentage, [
        Validators.required
      ]),
      'minPercentage': new FormControl(this.materialsMaster.minPercentage, [
        Validators.required
      ]),
      'certificate': new FormControl(this.materialsMaster.certificate, [
        Validators.required
      ]),
      'flat': new FormControl(this.materialsMaster.flat, [
        Validators.required
      ]),
      'observations': new FormControl(this.materialsMaster.observations, [
        Validators.required,
        Validators.minLength(this.minSize),
        Validators.maxLength(this.maxSize)
      ]),
      'company': new FormControl(this.materialsMaster.company, [
        Validators.required,
        Validators.minLength(this.minSize),
        Validators.maxLength(this.maxSize)
      ])
    });
  }

  // PANEL ARTÍCULO
  get cia() {
    return this.materialsMasterForm.get('cia');
  }
  get key() {
    return this.materialsMasterForm.get('key');
  }
  get ourKey() {
    return this.materialsMasterForm.get('ourKey');
  }
  get type() {
    return this.materialsMasterForm.get('type');
  }
  get client() {
    return this.materialsMasterForm.get('client');
  }
  get businessName() {
    return this.materialsMasterForm.get('businessName');
  }
  get seller() {
    return this.materialsMasterForm.get('seller');
  }
  get company() {
    return this.materialsMasterForm.get('company');
  }

  // PANEL MEDIDAS
  get long() {
    return this.materialsMasterForm.get('long');
  }
  get width() {
    return this.materialsMasterForm.get('width');
  }
  get height() {
    return this.materialsMasterForm.get('height');
  }
  get slots() {
    return this.materialsMasterForm.get('slots');
  }

  // PANEL ESPEFIFICACIÓN DE MATERIAL
  get purchase() {
    return this.materialsMasterForm.get('purchase');
  }
  get sale() {
    return this.materialsMasterForm.get('sale');
  }
  get sellerPrice() {
    return this.materialsMasterForm.get('sellerPrice');
  }
  get maxPercentage() {
    return this.materialsMasterForm.get('maxPercentage');
  }
  get minPercentage() {
    return this.materialsMasterForm.get('minPercentage');
  }
  get certificate() {
    return this.materialsMasterForm.get('certificate');
  }
  get flat() {
    return this.materialsMasterForm.get('flat');
  }
  get observations() {
    return this.materialsMasterForm.get('observations');
  }

  materialAction() {
    console.log(this.materialsMasterForm);
  }

}
