import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private frmBuild: FormBuilder) {
  }

  ngOnInit() {
    this.createSignUpFrm();
  }

  createSignUpFrm() {
     this.signUpForm = this.frmBuild.group({
          firstName: ['', [Validators.required, Validators.email]],
          lastName: ['', [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(8)]],
          email: ['', [Validators.required, Validators.email]]
        });
  }

}
