import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Supplier} from '../../models/supplier/supplier.model';
import {SupplierService} from '../../service/supplier.service';


@Component({
  selector: 'app-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styleUrls: ['./suppliers-form.component.css']
})
export class SuppliersFormComponent implements OnInit {

  public showAlert: boolean;
  public message: string;
  public alertType: string;

  public supplier: Supplier;
  suppliersForm: FormGroup;

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
              private supplierServ: SupplierService,
              private router: Router) {

    this.showAlert = false;
    this.message = '';
    this.alertType = '';

    this.supplier = new Supplier();

  }

  ngOnInit(): void {

    this.createSuppliersForm();

  }

  createSuppliersForm() {
    this.suppliersForm = this.formBuilder.group({
      'code': new FormControl(this.supplier.code, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMinName),
        Validators.maxLength(this.charactersMaxName)
      ]),
      'name': new FormControl(this.supplier.name, [
        Validators.required,
        Validators.pattern(/^[ñÑ\s\w]+$/),
        Validators.minLength(this.charactersMinName),
        Validators.maxLength(this.charactersMaxName)
      ]),
      'email': new FormControl(this.supplier.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(this.charactersMinEmail),
        Validators.maxLength(this.charactersMaxEmail)
      ]),
      'phone': new FormControl(this.supplier.phone, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(this.charactersMinPhone),
        Validators.maxLength(this.charactersMaxPhone)
      ]),
      'fax': new FormControl(this.supplier.fax, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(this.charactersMinPhone),
        Validators.maxLength(this.charactersMaxPhone)
      ]),
      'contact': new FormControl(this.supplier.contact, [
        Validators.required,
        Validators.minLength(this.charactersMinPhone),
        Validators.maxLength(this.charactersMaxPhone)
      ]),
      'alias': new FormControl(this.supplier.alias, [
        Validators.required,
        Validators.minLength(this.charactersMinPhone),
        Validators.maxLength(this.charactersMaxPhone)
      ]),
      'active': new FormControl(this.supplier.active, [
        Validators.required
      ]),
    });
  }

  get code() {
    return this.suppliersForm.get('code');
  }

  get name() {
    return this.suppliersForm.get('name');
  }

  get email() {
    return this.suppliersForm.get('email');
  }

  get phone() {
    return this.suppliersForm.get('phone');
  }

  get fax() {
    return this.suppliersForm.get('fax');
  }

  get contact() {
    return this.suppliersForm.get('contact');
  }

  get alias() {
    return this.suppliersForm.get('alias');
  }

  get active() {
    return this.suppliersForm.get('active');
  }

  add() {
    this.supplierServ.addSupplier(this.fillSupplier()).subscribe({
      next: (result: Supplier) => {
        console.log(result);
        this.showAlert = true;
        this.message = 'Se guardó con éxito';
        this.alertType = 'success';
        this.router.navigate([`/layout/suppliers/${result._id.$oid}/add/address`]);

      },
      error: (error: any) => { // TODO => que dice el juan que con onError ¿De qué habla?
        console.log(error);
        this.showAlert = true;
        this.message = 'No se guardó';
        this.alertType = 'danger';
      }
    });
  }

  fillSupplier(): Supplier {

    const formModel = this.suppliersForm.value;

    const supplier: Supplier = {
      code: formModel.code,
      name: formModel.name,
      email: formModel.email,
      phone: formModel.phone,
      fax: formModel.fax,
      contact: formModel.contact,
      alias: formModel.alias,
      active: false
    } as Supplier;


    return supplier;
  }


}
