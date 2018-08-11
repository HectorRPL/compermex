import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComprasComponent} from './compras.component';
import {ComprasListaComponent} from './compras-lista/compras-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ComprasComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'list', component: ComprasListaComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule {
}
