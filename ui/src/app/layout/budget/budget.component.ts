import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BoxesService} from '../../services/boxes/boxes.service';
import {Observable} from 'rxjs';
import {BoxType} from '../../models/box/box-type';
import {Paperboard} from '../../models/paperboard/paperboard.model';
import {BudgetFrm} from "../../models/budget/budget";
import {BudgetService} from "../../services/budget/budget.service";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public budgetForm: FormGroup;
  public $boxesTypes: Observable<BoxType[]>;
  public areaLamina: number;
  public pcomparmex: number;
  public pMininmo: number;
  public pMaquila: number;
  public pVenta: number;
  public showAll: boolean;
  public bancadasProvee: any[];
  public bancadasMaq: any[];
  public selectBoxType: BoxType;
  public selectPaperboard: Paperboard;


  constructor(private formBuilder: FormBuilder,
              private boxesService: BoxesService,
              private budgetService: BudgetService) {
    this.areaLamina = 0;
    this.pcomparmex = 0;
    this.pMininmo = 0;
    this.pMaquila = 0;
    this.pVenta = 0;
    this.showAll = false;
    this.selectPaperboard = new Paperboard();
    this.bancadasProvee = [{
      nombre: 'CARTONES Y CORRUGADOS INDUSTRIALES',
      costMillar: 7920,
      lMin: 60,
      lMax: 300,
      aMin: 20,
      aMax: 197,
      minM2: 50
    },
      {
        nombre: 'CARTRO SAPI',
        costMillar: 8990,
        lMin: 50,
        lMax: 500,
        aMin: 28,
        aMax: 247,
        minM2: 400
      },
      {
        nombre: 'BIOPAPEL',
        costMillar: 8990,
        lMin: 70,
        lMax: 350,
        aMin: 30,
        aMax: 240,
        minM2: 1000
      }];
    this.bancadasMaq = [{
      nombre: 'FLEXO',
      min: 38,
      max: 80
    },
      {
        nombre: 'IMPRESORA 1',
        min: 50,
        max: 113
      },
      {
        nombre: 'IMPRESORA 2',
        min: 24,
        max: 66
      },
      {
        nombre: 'PEGADORA 1',
        min: 35,
        max: 73
      },
      {
        nombre: 'SUAJE',
        min: 38,
        max: 53
      },
      {
        nombre: 'SUAJE SIN FIN',
        min: 0,
        max: 0
      },
      {
        nombre: 'RAYADURA',
        min: 98,
        max: 77
      }]
  }

  ngOnInit() {
    this.initBudgetForm();
    this.getTypes();
  }

  initBudgetForm() {
    this.budgetForm = this.formBuilder.group({

      'paperboardId': new FormControl( [
        Validators.required
      ]),
      'typeId': new FormControl([
        Validators.required
      ]),
      'strengthId': new FormControl([
        Validators.required
      ]),
      'boxTypeId': new FormControl('', [
        Validators.required
      ]),
      'width': new FormControl(0, [
        Validators.required
      ]),
      'large': new FormControl(0, [
        Validators.required
      ]),
      'depth': new FormControl('', [
        Validators.required
      ]),
      'quantity': new FormControl(0, [
        Validators.required
      ])
    })

  }

  get paperboardId() {
    return this.budgetForm.get('paperboardId');
  }

  get boxTypeId() {
    return this.budgetForm.get('boxTypeId');
  }

  get strengthId(){
    return this.budgetForm.get('strengthId');
  }

  get typeId(){
    return this.budgetForm.get('typeId');
  }

  get width() {
    return this.budgetForm.get('width');
  }

  get depth() {
    return this.budgetForm.get('depth');
  }

  get large() {
    return this.budgetForm.get('large');
  }

  get quantity() {
    return this.budgetForm.get('quantity');
  }


  createBudget() {
    console.log(this.budgetForm.value);

    this.budgetService.compute(this.budgetForm.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      complete: () => {

      },
      error: (err) => {
        console.log(err);
      }
    })

  }


  selectBox(event) {
    this.budgetForm.patchValue({'boxTypeId': this.selectBoxType._id});
    console.log(this.budgetForm);
  }

  setPaperBoard(paperboard: any) {
    const selectPaper = paperboard.response.item;
    console.log(selectPaper);
    console.log(selectPaper._id);
    this.budgetForm.patchValue({'paperboardId': selectPaper._id});
    this.budgetForm.patchValue({'strengthId': selectPaper.strengthId});
    this.budgetForm.patchValue({'typeId': selectPaper.typeId});
  }


  getTypes() {
    this.$boxesTypes = this.boxesService.getTypes();
  }



}
