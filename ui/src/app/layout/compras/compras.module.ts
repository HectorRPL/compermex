import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComprasListaComponent} from './compras-lista/compras-lista.component';
import {ComprasRoutingModule} from './compras-routing.module';
import {ComprasComponent} from './compras.component';

@NgModule({
  imports: [
    CommonModule,
    ComprasRoutingModule
  ],
  declarations: [
    ComprasComponent,
    ComprasListaComponent
  ]
})
export class ComprasModule {
}
