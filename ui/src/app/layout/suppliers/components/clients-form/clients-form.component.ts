import {Component, OnInit} from '@angular/core';
import {Client} from '../../../../models/client/client.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../../../services/client/client.service';


@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  public client: Client;
  clientsForm: FormGroup;

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
              private clientServ: ClientService) {

    this.client = new Client();

  }

  ngOnInit(): void {

    this.createClientsForm();

  }

  createClientsForm() {
    this.clientsForm = this.formBuilder.group({
      'name': new FormControl(this.client.name, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMinName),
        Validators.maxLength(this.charactersMaxName)
      ]),
      'email': new FormControl(this.client.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(this.charactersMinEmail),
        Validators.maxLength(this.charactersMaxEmail)
      ]),
      'phone': new FormControl(this.client.phone, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(this.charactersMinPhone),
        Validators.maxLength(this.charactersMaxPhone)
      ])
    });
  }

  get name() {
    return this.clientsForm.get('name');
  }

  get email() {
    return this.clientsForm.get('email');
  }

  get phone() {
    return this.clientsForm.get('phone');
  }

  /*
  add() {
    this.clientServ.addClient(this.fillClient())
      .subscribe(result => {
        console.log(result);
      });
  }
  */

  /*
  fillClient(): Client {

    const formModel = this.clientsForm.value;
    const client: Client = {
      name: formModel.name,
      email: formModel.email,
      phone: formModel.phone
    } as Client;

    console.log(client);

    return client;
  }
  */

}
