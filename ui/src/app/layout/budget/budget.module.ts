import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import {BudgetRoutingModule} from './budget-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchesModule} from '../searches/searches.module';
import {PaperboardService} from '../../services/paperboard/paperboard.service';
import {BudgetService} from "../../services/budget/budget.service";

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
  ],
  providers: [
    PaperboardService,
    BudgetService
  ]
})
export class BudgetModule { }
