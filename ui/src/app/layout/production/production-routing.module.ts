import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductionComponent} from "./components/production/production.component";
import {ListProductionComponent} from "./views/list-production/list-production.component";

const routes: Routes = [
  {
    path: '',
    component: ProductionComponent,
    children: [
      {
        path: 'list', component: ListProductionComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule {
}
