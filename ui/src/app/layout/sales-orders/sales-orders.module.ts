import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesOrdersComponent } from './components/sales-orders/sales-orders.component';
import { SalesOrdersFormComponent } from './components/sales-orders-form/sales-orders-form.component';
import { ListSalesOrdersComponent } from './views/list-sales-orders/list-sales-orders.component';
import { AddSalesOrdersComponent } from './views/add-sales-orders/add-sales-orders.component';

@NgModule({
  declarations: [
    SalesOrdersComponent,
    SalesOrdersFormComponent,
    ListSalesOrdersComponent,
    AddSalesOrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalesOrdersModule { }
