import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Area} from '../../../../models/area/client.model';
import {EmployeesService} from '../../service/employees.service';
import {Observable} from "rxjs/Observable";
import {SignUpData} from "../../../../auth/models/signUp/signUp";
import {ObjectId} from "../../../../models/object-id.model";
import {AuthService} from "ng2-ui-auth";


@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  public employee: SignUpData;
  public areas$: Observable<Area[]>;
  public employeesForm: FormGroup;
  public minCharacters: number = 2;
  public maxCharacters: number = 50;
  public minPhoneCharacters: number = 8;
  public manPhoneCharacters: number = 10;

  constructor(private formBuilder: FormBuilder,
              private employeesService: EmployeesService,
              private auth: AuthService) {

    this.employee = new SignUpData();

  }

  ngOnInit(): void {

    this.getAreas();

    this.createEmployeesForm();

  }

  addEmployee() {

    const dataFrm = this.fillEmployee();
    this.auth.signup(dataFrm).subscribe({
      next: (response)=>{
        console.log(response);
      },
      error:(e)=> console.log(e),
      complete: () => console.log('complete')

      })

  }

  createEmployeesForm() {
    this.employeesForm = this.formBuilder.group({
      'areaId': new FormControl(this.employee.areaId, [
        Validators.required
      ]),
      'lastName': new FormControl(this.employee.lastName, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.minCharacters),
        Validators.maxLength(this.maxCharacters)
      ]),
      'names': new FormControl(this.employee.username, [
        Validators.required,
        Validators.minLength(this.minCharacters),
        Validators.maxLength(this.maxCharacters)
      ]),
      'username': new FormControl(this.employee.username, [
        Validators.required,
        Validators.minLength(this.minCharacters),
        Validators.maxLength(this.maxCharacters)
      ]),
      'password': new FormControl(this.employee.password, [
        Validators.required,
        Validators.minLength(this.minCharacters),
        Validators.maxLength(this.maxCharacters)
      ]),
      'sex': new FormControl(this.employee.sex, [
        Validators.required
      ]),
      'birthdate': new FormControl(this.employee.birthdate, [
        Validators.required
      ]),
      'mobile': new FormControl(this.employee.mobile, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(this.minPhoneCharacters),
        Validators.maxLength(this.manPhoneCharacters)
      ])
    });
  }

  get areaId() {
    return this.employeesForm.get('areaId');
  }

  get names() {
    return this.employeesForm.get('names');
  }

  get lastName() {
    return this.employeesForm.get('lastName');
  }

  get username() {
    return this.employeesForm.get('username');
  }

  get password() {
    return this.employeesForm.get('password');
  }

  get sex() {
    return this.employeesForm.get('sex');
  }

  get birthdate() {
    return this.employeesForm.get('birthdate');
  }

  get mobile() {
    return this.employeesForm.get('mobile');
  }

  getAreas() {
    this.areas$ = this.employeesService.getAreas();
  }

  fillEmployee(): SignUpData {

    const formModel = this.employeesForm.value;

    const signUpData: SignUpData = {
      areaId: new ObjectId (formModel.areaId),
      names: formModel.names,
      lastName: formModel.lastName,
      username: formModel.username,
      password: formModel.password,
      sex: formModel.sex,
      birthdate: new Date(formModel.birthdate),
      mobile: formModel.mobile,
    } as SignUpData;

    console.log(signUpData);

    return signUpData;
  }

}
