import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../models/employee/employee';
import {EmployeesService} from '../../service/employees.service';


@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  public employee: Employee;
  employeesForm: FormGroup;

  // VALIDACIONES PARA EL INPUT NOMBRE
  minCharacters: number = 2;
  maxCharacters: number = 50;
  // VALIDACIONES PARA EL INPUT TELÉFONO
  minPhoneCharacters: number = 8;
  manPhoneCharacters: number = 10;

  constructor(private formBuilder: FormBuilder,
              private employeesService: EmployeesService) {

    this.employee = new Employee();

  }

  ngOnInit(): void {

    this.createEmployeesForm();

  }

  addEmployee() {

    console.log(this.employeesForm.value);

  }

  createEmployeesForm() {
    this.employeesForm = this.formBuilder.group({
      'departmentId': new FormControl(this.employee.departmentId, [
        Validators.required
      ]),
      'storeId': new FormControl(this.employee.storeId, [
        Validators.required
      ]),
      'names': new FormControl(this.employee.names, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.minCharacters),
        Validators.maxLength(this.maxCharacters)
      ]),
      'lastNames': new FormControl(this.employee.lastNames, [
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
      'phone': new FormControl(this.employee.phone, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(this.minPhoneCharacters),
        Validators.maxLength(this.manPhoneCharacters)
      ])
    });
  }

  get departmentId() {
    return this.employeesForm.get('departmentId');
  }

  get storeId() {
    return this.employeesForm.get('storeId');
  }

  get names() {
    return this.employeesForm.get('names');
  }

  get lastNames() {
    return this.employeesForm.get('lastNames');
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

  get phone() {
    return this.employeesForm.get('phone');
  }

}
