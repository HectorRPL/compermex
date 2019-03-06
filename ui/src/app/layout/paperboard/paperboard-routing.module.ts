import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PaperboardComponent} from './components/paperboard/paperboard.component';
import {ListPaperboardComponent} from './views/list-paperboard/list-paperboard.component';
import {AddPaperboardComponent} from './views/add-paperboard/add-paperboard.component';


const routes: Routes = [
  {
    path: '',
    component: PaperboardComponent,
    children: [
      {
        path: 'list', component: ListPaperboardComponent
      },
      {
        path: 'add', component: AddPaperboardComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaperboardsRoutingModule {
}
