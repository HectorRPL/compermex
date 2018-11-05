import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReceptionComponent} from './components/reception/reception.component';
import {ListReceptionComponent} from './views/list-reception/list-reception.component';


const routes: Routes = [
  {
    path: '',
    component: ReceptionComponent,
    children: [
      {
        path: 'list', component: ListReceptionComponent
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
