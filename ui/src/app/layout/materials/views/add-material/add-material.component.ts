import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Material} from "../../models/material.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  minSize: number;
  maxSize: number;

  public material: Material;
  materialsForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {

    this.material = new Material();
    this.minSize = 1;
    this.maxSize = 10;

  }

  ngOnInit() {

    this.createMaterialsForm();

  }

  createMaterialsForm() {
    this.materialsForm = this.formBuilder.group({
      'description': new FormControl(this.material.description, [
        Validators.required
      ]),
    });
  }

  get description() {
    return this.materialsForm.get('description');
  }

  activarVista(valor) {
    console.log('valor ', valor);
    this.router.navigate([valor], {relativeTo: this.route});

  }

}
