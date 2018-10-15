import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'compras',
        loadChildren: './compras/compras.module#ComprasModule',
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
