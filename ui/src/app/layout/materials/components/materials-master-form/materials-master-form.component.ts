import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MaterialsMaster} from '../../models/materials-master.model';

@Component({
  selector: 'app-materials-master-form',
  templateUrl: './materials-master-form.component.html',
  styleUrls: ['./materials-master-form.component.css']
})
export class MaterialsMastersMasterFormComponent implements OnInit {

  public minSize: number;
  public maxSize: number;
  public materialsMaster: MaterialsMaster;
  public materialsMasterForm: FormGroup;
  public statusCompanySearchForm: boolean;
  public statusCustomersSearchForm: boolean;
  public statusEmployeessSearchForm: boolean;

  constructor(private formBuilder: FormBuilder) {

    this.statusCompanySearchForm = true;
    this.statusCustomersSearchForm = true;
    this.materialsMaster = new MaterialsMaster();
    this.minSize = 1;
    this.maxSize = 10;

  }

  ngOnInit() {


    this.createMaterialsMastersForm();

  }

  createMaterialsMastersForm() {
    this.materialsMasterForm = this.formBuilder.group({
      'companyId': new FormControl(this.materialsMaster.companyId, [
        Validators.required
      ]),
      'customerId': new FormControl(this.materialsMaster.customerId, [
        Validators.required
      ]),
      'observations': new FormControl(this.materialsMaster.observations, [
        Validators.required
      ]),
      'variationPositive': new FormControl(this.materialsMaster.variationPositive, [
        Validators.required
      ]),
      'variationNegative': new FormControl(this.materialsMaster.variationNegative, [
        Validators.required
      ]),
      'code': new FormControl(this.materialsMaster.code, [
        Validators.required
      ]),
      'boxTypeId': new FormControl(this.materialsMaster.boxTypeId, [
        Validators.required
      ]),
      'sellerPrice': new FormControl(this.materialsMaster.sellerPrice, [
        Validators.required
      ]),
      'employeeId': new FormControl(this.materialsMaster.employeeId, [
        Validators.required
      ]),
      'description': new FormControl(this.materialsMaster.description, [
        Validators.required
      ]),
      /* TODO
      'large': new FormControl(this.materialsMaster.boxSizeLarge.large, [
        Validators.required
      ]),
      */


      /*

      'boxSizeSmall': new FormControl(this.materialsMaster.boxSizeSmall, [
        Validators.required
      ]),
      'description': new FormControl(this.materialsMaster.description, [
        Validators.required
      ]),
      'paperboardId': new FormControl(this.materialsMaster.paperboardId, [
        Validators.required
      ]),
      */

    });
  }

  get variationPositive() {
    return this.materialsMasterForm.get('variationPositive');
  }

  get variationNegative() {
    return this.materialsMasterForm.get('variationNegative');
  }

  get code() {
    return this.materialsMasterForm.get('code');
  }

  get boxTypeId() {
    return this.materialsMasterForm.get('boxTypeId');
  }

  get sellerPrice() {
    return this.materialsMasterForm.get('sellerPrice');
  }

  get description() {
    return this.materialsMasterForm.get('description');
  }

  get companyId() {
    return this.materialsMasterForm.get('companyId');
  }

  get customerId() {
    return this.materialsMasterForm.get('customerId');
  }

  /*
  get large() {
    return this.materialsMasterForm.get('large');
  }
  */


  /*

  get boxSizeSmall() {
    return this.materialsMasterForm.get('boxSizeSmall');
  }



  get paperboardId() {
    return this.materialsMasterForm.get('paperboardId');
  }
*/
  get observations() {
    return this.materialsMasterForm.get('observations');
  }

  materialAction() {
    console.log(this.materialsMasterForm);
  }

  recipeStatusForm(status: boolean) {
    this.statusCompanySearchForm = status;
  }

  recipeCustomersSearchStatusForm(status: boolean) {
    this.statusCustomersSearchForm = status;
  }

  recipeEmployeessSearchStatusForm(status: boolean) {
    this.statusEmployeessSearchForm = status;
  }

}
