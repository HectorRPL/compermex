import {Component, OnInit} from '@angular/core';
import {Material} from '../../models/material.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-materials-form',
  templateUrl: './materials-form.component.html',
  styleUrls: ['./materials-form.component.css']
})
export class MaterialsFormComponent implements OnInit {

  minSize: number;
  maxSize: number;

  public material: Material;
  materialsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.material = new Material();
    this.minSize = 1;
    this.maxSize = 100;

  }

  ngOnInit() {

    this.createMaterialsForm();

  }

  createMaterialsForm() {
    this.materialsForm = this.formBuilder.group({
      // PANEL ARTÍCULO
      'cia': new FormControl(this.material.cia, [
        Validators.required
      ]),
      'key': new FormControl(this.material.key, [
        Validators.required
      ]),
      'ourKey': new FormControl(this.material.ourKey, [
        Validators.required
      ]),
      'type': new FormControl(this.material.type, [
        Validators.required
      ]),
      'client': new FormControl(this.material.client, [
        Validators.required
      ]),

      // <!--PANEL MEDIDAS-->
      'long': new FormControl(this.material.long, [
        Validators.required,
        Validators.min(this.minSize),
        Validators.max(this.maxSize)
      ]),
      'width': new FormControl(this.material.width, [
        Validators.required,
        Validators.min(this.minSize),
        Validators.max(this.maxSize)
      ]),
      'height': new FormControl(this.material.height, [
        Validators.required,
        Validators.min(this.minSize),
        Validators.max(this.maxSize)
      ]),
      'slots': new FormControl(this.material.slots, [
        Validators.required,
        Validators.min(this.minSize),
        Validators.max(this.maxSize)
      ]),

      // <!--PANEL ESPEFIFICACIONES DE MATERIAL-->
      'purchase': new FormControl(this.material.purchase, [
        Validators.required
      ]),
      'sale': new FormControl(this.material.sale, [
        Validators.required
      ]),
      'sellerPrice': new FormControl(this.material.sellerPrice, [
        Validators.required
      ]),
      'maxPercentage': new FormControl(this.material.maxPercentage, [
        Validators.required
      ]),
      'minPercentage': new FormControl(this.material.minPercentage, [
        Validators.required
      ]),
      'certificate': new FormControl(this.material.certificate, [
        Validators.required
      ]),
      'flat': new FormControl(this.material.flat, [
        Validators.required
      ])
    });
  }

  // PANEL ARTÍCULO
  get cia() {
    return this.materialsForm.get('cia');
  }
  get key() {
    return this.materialsForm.get('key');
  }
  get ourKey() {
    return this.materialsForm.get('ourKey');
  }
  get type() {
    return this.materialsForm.get('type');
  }
  get client() {
    return this.materialsForm.get('client');
  }

  // PANEL MEDIDAS
  get long() {
    return this.materialsForm.get('long');
  }
  get width() {
    return this.materialsForm.get('width');
  }
  get height() {
    return this.materialsForm.get('height');
  }
  get slots() {
    return this.materialsForm.get('slots');
  }

  // PANEL ESPEFIFICACIÓN DE MATERIAL
  get purchase() {
    return this.materialsForm.get('purchase');
  }
  get sale() {
    return this.materialsForm.get('sale');
  }
  get sellerPrice() {
    return this.materialsForm.get('sellerPrice');
  }
  get maxPercentage() {
    return this.materialsForm.get('maxPercentage');
  }
  get minPercentage() {
    return this.materialsForm.get('minPercentage');
  }
  get certificate() {
    return this.materialsForm.get('certificate');
  }
  get flat() {
    return this.materialsForm.get('flat');
  }

  materialAction() {
    console.log(this.materialsForm);
  }

}
