import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUp} from '../../../../auth/models/signUp/signUp';
import {Area} from '../../../../models/area/client.model';
import {EmployeesService} from '../../service/employees.service';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  public employee: SignUp;
  public areas$: Observable<Area[]>;
  public employeesForm: FormGroup;
  public minCharacters: number = 2;
  public maxCharacters: number = 50;
  public minPhoneCharacters: number = 8;
  public manPhoneCharacters: number = 10;

  constructor(private formBuilder: FormBuilder,
              private employeesService: EmployeesService) {

    this.employee = new SignUp();

  }

  ngOnInit(): void {

    this.getAreas();

    this.createEmployeesForm();

  }

  addEmployee() {

    console.log(this.employeesForm.value);

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
      'birdDate': new FormControl(this.employee.birdDate, [
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

  get birdDate() {
    return this.employeesForm.get('birdDate');
  }

  get mobile() {
    return this.employeesForm.get('mobile');
  }

  getAreas() {
    this.areas$ = this.employeesService.getAreas();
    console.log(this.areas$);
  }

}
