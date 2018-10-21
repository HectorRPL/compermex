import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../../models/employee/employee";
import {EmployeesService} from "../../../services/employees/employees.service";


@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  public employee: Employee;
  employeesForm: FormGroup;

  // VALIDACIONES PARA EL INPUT NOMBRE
  charactersMinName: number = 2;
  charactersMaxName: number = 50;
  // VALIDACIONES PARA EL INPUT EMAIL
  charactersMinEmail: number = 5;
  charactersMaxEmail: number = 50;
  // VALIDACIONES PARA EL INPUT TELÉFONO
  charactersMinPhone: number = 8;
  charactersMaxPhone: number = 10;

  constructor(private formBuilder: FormBuilder,
              private employeesService: EmployeesService) {

    this.employee = new Employee();

  }

  ngOnInit(): void {

    this.createEmployeesForm();

  }

  createEmployeesForm() {
    this.employeesForm = this.formBuilder.group({
      'name': new FormControl(this.employee.name, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMinName),
        Validators.maxLength(this.charactersMaxName)
      ]),
      'email': new FormControl(this.employee.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(this.charactersMinEmail),
        Validators.maxLength(this.charactersMaxEmail)
      ]),
      'phone': new FormControl(this.employee.phone, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(this.charactersMinPhone),
        Validators.maxLength(this.charactersMaxPhone)
      ]),
      'sex': new FormControl(this.employee.sex, [
        Validators.required
      ]),
      'birdDate': new FormControl(this.employee.birdDate, [
        Validators.required
      ]),
      'jobPosition': new FormControl(this.employee.jobPosition, [
        Validators.required
      ])
    });
  }

  get name() {
    return this.employeesForm.get('name');
  }

  get email() {
    return this.employeesForm.get('email');
  }

  get phone() {
    return this.employeesForm.get('phone');
  }

  get sex() {
    return this.employeesForm.get('sex');
  }

  get birdDate() {
    return this.employeesForm.get('birdDate');
  }

  get jobPosition() {
    return this.employeesForm.get('jobPosition');
  }

}
