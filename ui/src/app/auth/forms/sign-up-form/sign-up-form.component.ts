import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private frmBuild: FormBuilder) {
  }

  ngOnInit() {
    this.crearLoginFrm();
  }

  crearLoginFrm() {
    this.loginForm = this.frmBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)]]
    });
  }

  signUp() {

  }

}
