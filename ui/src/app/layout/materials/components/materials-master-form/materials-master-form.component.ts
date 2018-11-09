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

    // this.createMaterialsMastersForm();

  }

  /*
  createMaterialsMastersForm() {
    this.materialsMasterForm = this.formBuilder.group({
      'code': new FormControl(this.materialsMaster.code, [
        Validators.required
      ]),
      'description': new FormControl(this.materialsMaster.description, [
        Validators.required
      ]),
      'boxTypeId': new FormControl(this.materialsMaster.boxTypeId, [
        Validators.required
      ]),
    });
  }
  */

  /*
  get code() {
    return this.materialsMasterForm.get('code');
  }

  get description() {
    return this.materialsMasterForm.get('description');
  }

  get boxTypeId() {
    return this.materialsMasterForm.get('boxTypeId');
  }
  */
  materialAction() {
    console.log(this.materialsMasterForm);
  }

}
