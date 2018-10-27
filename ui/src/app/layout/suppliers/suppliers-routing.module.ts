import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuppliersComponent} from './suppliers.component';
import {ListSuppliersComponent} from './views/list-suppliers/list-suppliers.component';


const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent,
    children: [
      {
        path: 'list', component: ListSuppliersComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule {
}
