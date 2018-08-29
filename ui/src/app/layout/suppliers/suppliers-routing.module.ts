import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SuppliersComponent} from "./suppliers.component";
import {SuppliersListComponent} from "./views/suppliers-list/suppliers-list.component";

const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: SuppliersListComponent},
        ]
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
