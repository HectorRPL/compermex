import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MaterialsComponent} from './materials.component';
import {CreateMaterialComponent} from './components/create-material/create-material.component';


const routes: Routes = [
  {
    path: '',
    component: MaterialsComponent,
    children: [
      {
        path: 'create', component: CreateMaterialComponent
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
