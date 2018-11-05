import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QualityComponent} from './components/quality/quality.component';
import {ListQualityComponent} from './views/list-quality/list-quality.component';

const routes: Routes = [
  {
    path: '',
    component: QualityComponent,
    children: [
      {
        path: 'list', component: ListQualityComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityRoutingModule {
}
