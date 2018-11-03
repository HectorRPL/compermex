import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialsRoutingModule} from './materials-routing.module';
import {MaterialsComponent} from './components/materials/materials.component';
import {MaterialsFormComponent} from './components/materials-form/materials-form.component';
import {AddMaterialComponent} from './views/add-material/add-material.component';
import {ListMaterialsComponent} from './views/list-materials/list-materials.component';
import {MaterialsSearchComponent} from "./components/materials-search/materials-search.component";
import { ListMaterialSelectedComponent } from './components/list-material-selected/list-material-selected.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsRoutingModule
  ],
  declarations: [
    MaterialsComponent,
    MaterialsFormComponent,
    AddMaterialComponent,
    ListMaterialsComponent,
    MaterialsSearchComponent,
    ListMaterialSelectedComponent
  ]
})
export class MaterialsModule {
}
