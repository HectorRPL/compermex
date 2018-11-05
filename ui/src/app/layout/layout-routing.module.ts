import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule',
        data: {preload: false}
      },
      {
        path: 'suppliers',
        loadChildren: './suppliers/suppliers.module#SuppliersModule',
        data: {preload: false}
      },
      {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule',
        data: {preload: false}
      },
      {
        path: 'materials',
        loadChildren: './materials/materials.module#MaterialsModule',
        data: {preload: false}
      },
      {
        path: 'employees',
        loadChildren: './employees/employees.module#EmployeesModule',
        data: {preload: false}
      },
      {
        path: 'cardboards',
        loadChildren: './cardboards/cardboards.module#CardboardsModule',
        data: {preload: false}
      },
      {
        path: 'reception',
        loadChildren: './reception/reception.module#ReceptionModule',
        data: {preload: false}
      },
      {
        path: 'production',
        loadChildren: './production/production.module#ProductionModule',
        data: {preload: false}
      },
      {
        path: 'quality',
        loadChildren: './quality/quality.module#QualityModule',
        data: {preload: false}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
