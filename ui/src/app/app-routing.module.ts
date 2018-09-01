import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signUp',
    pathMatch: 'full'
  },
  {
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutModule',
    data: {preload: false}
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    data: {preload: false}
  }
  // {path: '**', redirectTo: 'not-found'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
