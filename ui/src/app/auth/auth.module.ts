import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInFormComponent } from './forms/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './forms/sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {UserService} from "../services/auth/user.service";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  providers: [
    UserService
  ]
})
export class AuthModule { }
