import {Component, EventEmitter, Output} from '@angular/core';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs/index';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SupplierService} from '../../../../services/suppliers/supplier.service';
import {Supplier} from '../../../suppliers/models/supplier/supplier.model';


@Component({
  selector: 'app-suppliers-search',
  templateUrl: './suppliers-search.component.html',
  styleUrls: ['./suppliers-search.component.css']
})
export class SuppliersSearchComponent {

  @Output() public sendStatusForm = new EventEmitter();
  public supplierSearchForm: FormGroup;
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private supplierServ: SupplierService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createCustomerSearchForm();
  }

  createCustomerSearchForm() {
    this.supplierSearchForm = this.formBuilder.group({
      'supplier': new FormControl('', [
        Validators.required
      ]),
    });
  }

  get supplier() {
    return this.supplierSearchForm.get('supplier');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.supplierServ.searchSuppliers(term.toUpperCase()).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Supplier) => x.name;
  inFormatter = (result: Supplier) => result.name;

  selectedItem(event) {
    console.log(event);
    if (this.supplierSearchForm.status === 'VALID') {
      const value = {
        status: false,
        _id: event.item._id
      };
      this.sendStatusForm.emit(value);
    } else if (this.supplierSearchForm.status === 'INVALID') {
      const value = {
        status: true,
        _id: null
      };
      this.sendStatusForm.emit(value);

    }
  }

}
