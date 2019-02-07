import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BoxesService} from "../../services/boxes/boxes.service";
import {Observable} from "rxjs";
import {BoxType} from "../../models/box/box-type";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public budgetForm: FormGroup;
  public $boxesTypes: Observable<BoxType[]>;


  constructor(private formBuilder: FormBuilder,
              private boxesService: BoxesService) { }

  ngOnInit() {
    this.initBudgetForm();
    this.getTypes();
  }

  initBudgetForm(){
    this.budgetForm = this.formBuilder.group({
      'paperboardId': new FormControl('', [
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
      'high': new FormControl('', [
        Validators.required
      ]),
      'quantity': new FormControl(0, [
        Validators.required
      ])
    })

  }

  get boxTypeId() {
    return this.budgetForm.get('boxTypeId');
  }

  get width() {
    return this.budgetForm.get('width');
  }

  get high() {
    return this.budgetForm.get('high');
  }

  get large() {
    return this.budgetForm.get('large');
  }

  get quantity() {
    return this.budgetForm.get('quantity');
  }

  getTypes() {
    this.$boxesTypes = this.boxesService.getTypes();
  }

  createBudget(){

  }

  filterForeCasts(e: BoxType){
    console.log(e);

  }

}
