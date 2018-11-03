import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardboardsComponent} from './components/cardboards/cardboards.component';
import {ListCardboardsComponent} from './views/list-cardboards/list-cardboards.component';
import {AddCardboardComponent} from './views/add-cardboard/add-cardboard.component';


const routes: Routes = [
  {
    path: '',
    component: CardboardsComponent,
    children: [
      {
        path: 'list', component: ListCardboardsComponent
      },
      {
        path: 'add', component: AddCardboardComponent
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
