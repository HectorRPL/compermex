import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private frmBuild: FormBuilder) {
  }

  ngOnInit() {
    this.createSignInFrm();
  }

  createSignInFrm() {
   this.signInForm = this.frmBuild.group({
         email: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.required,
           Validators.minLength(6),
           Validators.maxLength(8)]]
       });
  }

  signIn() {

  }

}
