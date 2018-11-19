import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-receive-paperboard-form',
  templateUrl: './receive-paperboard-form.component.html',
  styleUrls: ['./receive-paperboard-form.component.css']
})
export class ReceivePaperboardFormComponent implements OnInit {

  @Output() public sendDataForm = new EventEmitter();
  public receivePaperboardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.createForm();

  }

  createForm() {
    this.receivePaperboardForm = this.formBuilder.group({
      'numProductsReceived': new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.max(100),
        Validators.min(1)
      ]),
    });
  }

  get numProductsReceived() {
    return this.receivePaperboardForm.get('numProductsReceived');
  }

  sendData() {
    this.sendDataForm.emit(this.receivePaperboardForm);
  }

}
