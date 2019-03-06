import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FactorComponent} from './components/factor/factor.component';
import {ListFactorComponent} from './views/list-factor/list-factor.component';
import {AddFactorComponent} from './views/add-factor/add-factor.component';

const routes: Routes = [
  {
    path: '',
    component: FactorComponent,
    children: [
      {
        path: 'list', component: ListFactorComponent
      },
      {
        path: 'add', component: AddFactorComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactorsRoutingModule {
}
