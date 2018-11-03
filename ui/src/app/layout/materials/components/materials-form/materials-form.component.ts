import {Component, OnInit} from '@angular/core';
import {Material} from '../../models/material.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-materials-form',
  templateUrl: './materials-form.component.html',
  styleUrls: ['./materials-form.component.css']
})
export class MaterialsFormComponent implements OnInit {

  public material: Material;
  materialsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.material = new Material();

  }

  ngOnInit() {

    this.createMaterialsForm();

  }

  createMaterialsForm() {
    this.materialsForm = this.formBuilder.group({
      'description': new FormControl(this.material.description, [
        Validators.required
      ])
    });
  }

  get description() {
    return this.materialsForm.get('description');
  }

  materialAction() {
    console.log(this.materialsForm);
  }

}
