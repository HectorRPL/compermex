import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialsRoutingModule} from './materials-routing.module';
import {CreateMaterialComponent} from './components/create-material/create-material.component';
import {MaterialsComponent} from './materials.component';

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
    CreateMaterialComponent
  ]
})
export class MaterialsModule {
}
