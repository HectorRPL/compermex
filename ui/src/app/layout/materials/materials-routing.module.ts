import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MaterialsComponent} from './components/materials/materials.component';
import {AddMaterialComponent} from './views/add-material/add-material.component';
import {ListMaterialsComponent} from './views/list-materials/list-materials.component';


const routes: Routes = [
  {
    path: '',
    component: MaterialsComponent,
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
export class MaterialsRoutingModule {
}
