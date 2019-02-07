import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import {BudgetRoutingModule} from './budget-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchesModule} from '../searches/searches.module';

@NgModule({
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SearchesModule

  ],
  declarations: [
    BudgetComponent
  ]
})
export class BudgetModule { }
