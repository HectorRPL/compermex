import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListMaterialsComponent} from './views/list-materials/list-materials.component';
import {AddMaterialComponent} from './views/add-material/add-material.component';
import {CardboardsComponent} from './components/cardboards/cardboards.component';


const routes: Routes = [
  {
    path: '',
    component: CardboardsComponent,
    children: [
      {
        path: 'list', component: ListMaterialsComponent
      },
      {
        path: 'add', component: AddMaterialComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
