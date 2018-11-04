import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MaterialsComponent} from './components/materials/materials.component';
import {AddMaterialComponent} from './views/add-material/add-material.component';
import {ListMaterialsComponent} from './views/list-materials/list-materials.component';
import {ListMaterialSelectedComponent} from './components/list-material-selected/list-material-selected.component';
import {MaterialsFormComponent} from './components/materials-form/materials-form.component';
import {AddMaterialMasterComponent} from "./views/add-material-master/add-material-master.component";


const routes: Routes = [
  {
    path: '',
    component: MaterialsComponent,
    children: [
      {
        path: 'list',
        component: ListMaterialsComponent,
        children: [
          {path: 'color', component: ListMaterialSelectedComponent},
          {path: 'strengths', component: ListMaterialSelectedComponent},
          {path: 'type', component: ListMaterialSelectedComponent}
        ]
      },
      {
        path: 'add',
        component: AddMaterialComponent,
        children: [
          {path: 'color', component: MaterialsFormComponent},
          {path: 'strengths', component: MaterialsFormComponent},
          {path: 'type', component: MaterialsFormComponent}
        ]
      },
      {
        path: 'addMaterial',
        component: AddMaterialMasterComponent
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
