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
      'key': new FormControl(this.material.key, [
        Validators.required
      ]),
      'ourKey': new FormControl(this.material.ourKey, [
        Validators.required
      ]),
      'type': new FormControl(this.material.type, [
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
      ])
    });
  }

  // PANEL ARTÍCULO
  get key() {
    return this.materialsForm.get('key');
  }

  get ourKey() {
    return this.materialsForm.get('ourKey');
  }

  get type() {
    return this.materialsForm.get('type');
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

  materialAction() {
    console.log(this.materialsForm);
  }

}
