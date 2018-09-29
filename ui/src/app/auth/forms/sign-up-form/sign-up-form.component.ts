import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUp} from '../../../models/sign-up';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  public signUp: SignUp;
  signUpForm: FormGroup;

  charactersMin: number = 2;
  charactersMax: number = 50;

  constructor(private formBuilder: FormBuilder) {

    this.signUp = new SignUp();

  }

  ngOnInit() {

    this.createSignUpFrm();

  }

  createSignUpFrm() {
    this.signUpForm = this.formBuilder.group({
      'firstName': new FormControl(this.signUp.firstName, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ]),
      'lastName': new FormControl(this.signUp.lastName, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ]),
      'email': new FormControl(this.signUp.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ]),
      'password': new FormControl(this.signUp.password, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMin),
        Validators.maxLength(this.charactersMax)
      ])
    });
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  signInAction() {
    console.log(this.signUpForm);
  }

}
