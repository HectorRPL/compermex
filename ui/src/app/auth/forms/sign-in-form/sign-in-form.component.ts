import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SignIn} from '../../../layout/models/sign-in';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  public signIn: SignIn;
  signInForm: FormGroup;

  charactersMin: number = 2;
  charactersMax: number = 50;

  constructor(private formBuilder: FormBuilder) {

    this.signIn = new SignIn();

  }

  ngOnInit() {

    this.createSignInForm();

  }

  createSignInForm() {
    this.signInForm = this.formBuilder.group({
      'email': new FormControl(this.signIn.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ]),
      'password': new FormControl(this.signIn.password, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ])
    });
  }

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  signInAction() {
    console.log(this.signInForm);
  }

}
