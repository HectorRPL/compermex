import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MaterialsMaster} from '../../models/materials-master.model';
import {ObjectId} from "../../../../models/object-id.model";
import {MaterialsService} from "../../../../services/materials/materials.service";
import {Paperboard} from "../../../../models/paperboard/paperboard.model";

@Component({
  selector: 'app-materials-master-form',
  templateUrl: './materials-master-form.component.html',
  styleUrls: ['./materials-master-form.component.css']
})
export class MaterialsMastersMasterFormComponent implements OnInit {

  public showAlert: boolean;
  public message: string;
  public alertType: string;


  public minSize: number;
  public maxSize: number;
  public materialsMaster: MaterialsMaster;
  public materialsMasterForm: FormGroup;
  public statusCompanySearchForm: boolean;
  public companyId: ObjectId;
  public statusCustomersSearchForm: boolean;
  public customerId: ObjectId;
  public statusEmployeessSearchForm: boolean;
  public employeeId: ObjectId;
  public statusPaperboardsSearchForm: boolean;
  public paperboardId: ObjectId;
  public responsePaperboardSearch: Paperboard;

  constructor(private formBuilder: FormBuilder,
              private materialsService: MaterialsService) {

    this.statusCompanySearchForm = true;
    this.statusEmployeessSearchForm = true;
    this.statusCustomersSearchForm = true;
    this.statusPaperboardsSearchForm = true;
    this.materialsMaster = new MaterialsMaster();
    this.minSize = 1;
    this.maxSize = 10;

    this.showAlert = false;
    this.message = '';
    this.alertType = '';

  }

  ngOnInit() {

    this.createMaterialsMastersForm();

  }

  createMaterialsMastersForm() {
    this.materialsMasterForm = this.formBuilder.group({
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
      'description': new FormControl(this.materialsMaster.description, [
        Validators.required
      ]),
      'paperboardId': new FormControl(this.materialsMaster.paperboardId, [
        Validators.required
      ]),
      'width': new FormControl(this.materialsMaster.width, [
        Validators.required
      ]),
      'large': new FormControl(this.materialsMaster.large, [
        Validators.required
      ]),
      'high': new FormControl(this.materialsMaster.high, [
        Validators.required
      ]),
      'quality': new FormControl(this.materialsMaster.quality, [
        Validators.required
      ]),
      'plane': new FormControl(this.materialsMaster.plane, [
        Validators.required
      ]),
      'unitCost': new FormControl(this.materialsMaster.unitCost, [
        Validators.required
      ])
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

  get width() {
    return this.materialsMasterForm.get('width');
  }

  get high() {
    return this.materialsMasterForm.get('high');
  }

  get large() {
    return this.materialsMasterForm.get('large');
  }

  get plane() {
    return this.materialsMasterForm.get('plane');
  }

  get quality() {
    return this.materialsMasterForm.get('quality');
  }

  get unitCost() {
    return this.materialsMasterForm.get('unitCost');
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



*/
  get observations() {
    return this.materialsMasterForm.get('observations');
  }

  materialAction() {
    const materialMaster: MaterialsMaster = {
      observations: this.materialsMasterForm.controls.observations.value,
      sellerPrice: this.materialsMasterForm.controls.sellerPrice.value,
      description: this.materialsMasterForm.controls.description.value,
      code: this.materialsMasterForm.controls.code.value,
      variationPositive: this.materialsMasterForm.controls.variationPositive.value,
      variationNegative: this.materialsMasterForm.controls.variationNegative.value,
      boxTypeId: new ObjectId('5bd29adf583b8c1a0df75408'), // TODO => Falta conectarlo con el servicio de back, ya est?? el servicio
      paperboardId: this.paperboardId,
      width: this.materialsMasterForm.controls.width.value,
      large: this.materialsMasterForm.controls.large.value,
      high: this.materialsMasterForm.controls.high.value,
      quality: this.convertStringToBoolean(this.materialsMasterForm.controls.quality.value),
      plane: this.convertStringToBoolean(this.materialsMasterForm.controls.plane.value),
      unitCost: this.materialsMasterForm.controls.unitCost.value,
      size: 'standar'
  };

    this.materialsMaster = materialMaster;

    this.materialsService.addMaterial(materialMaster).subscribe({
      next: (result) => {
        this.showAlert = true;
        this.message = 'Se guard?? con ??xito';
        this.alertType = 'success';

      },
      error: (error: any) => {
        this.showAlert = true;
        this.message = 'No se guard??';
        this.alertType = 'danger';
      }
    });
  }

  recipeCompanyStatusForm(event) {
    this.statusCompanySearchForm = event.status;
    this.companyId = event._id;
  }

  recipeCustomersSearchStatusForm(event) {
    this.statusCustomersSearchForm = event.status;
    this.customerId = event._id;
  }

  recipeEmployeessSearchStatusForm(event) {
    this.statusEmployeessSearchForm = event.status;
    this.employeeId = event._id;
  }

  recipePaperboardsSearchStatusForm(event) {
    this.statusPaperboardsSearchForm = event.status;
    this.paperboardId = event._id;
    this.responsePaperboardSearch = event.response.item; // TODO => Esto ya est?? tipado y debes homolagar las dem??s

    this.materialsMasterForm.patchValue({
      unitCost: event.response.item.cost,
      sellerPrice: this.calculateSalePrice(event.response.item.cost),
    });
  }

  convertStringToBoolean(value: string): boolean {
    let result: boolean = true;
    if (value === 'true') {
      result = true;
    } else if (value === 'false') {
      result = false;
    }

    return result;
  }

  calculateSalePrice(cost: number): number {
    const factor: number = 1; // TODO => Se harcodea, aqu?? va el la utilidad que se le quiere sacar en porcentaje
    const result = cost * (1 + factor);

    return result;
  }

}
