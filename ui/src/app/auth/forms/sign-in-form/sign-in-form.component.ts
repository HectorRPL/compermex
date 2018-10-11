import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SignIn} from '../../../models/sign-in';
import {AuthService} from 'ng2-ui-auth';
import {LoginData} from '../../../models/auth/login-data';
import {Router} from '@angular/router';
import {UserService} from '../../../services/auth/user.service';

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

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private userService: UserService) {

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
    const data = this.fillLoginData();

    this.auth.login(data).subscribe({
      next:(result)=> {
        console.log('RESULT', result);
        this.userService.renewUser();
        this.router.navigateByUrl('/layout/create/order');
      },
      error: (err: any) => {
        console.log('Error', err);
      }

    });

  }

  fillLoginData():LoginData{
    const formModel = this.signInForm.value;
    const login = {
      email: formModel.email,
      password: formModel.password
    };

    return login;
  }

}
