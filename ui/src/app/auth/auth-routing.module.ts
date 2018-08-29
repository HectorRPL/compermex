import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {SignInFormComponent} from './forms/sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from './forms/sign-up-form/sign-up-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signIn',
        component: SignInFormComponent
      },
      {
        path: 'signUp',
        component: SignUpFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
