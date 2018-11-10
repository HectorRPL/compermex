import {Component, EventEmitter, Output} from '@angular/core';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Company} from '../../../../models/company/company.model';
import {Observable, of} from 'rxjs/index';
import {CustomersService} from '../../../customers/service/customers.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customers-search',
  templateUrl: './customers-search.component.html',
  styleUrls: ['./customers-search.component.css']
})
export class CustomersSearchComponent {

  @Output() public sendStatusForm = new EventEmitter();
  public customerSearchForm: FormGroup;
  public model: any;
  public searching = false;
  public searchFailed = false;

  constructor(private customersService: CustomersService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createCustomerSearchForm();
  }

  createCustomerSearchForm() {
    this.customerSearchForm = this.formBuilder.group({
      'customer': new FormControl('', [
        Validators.required
      ]),
    });
  }

  get customer() {
    return this.customerSearchForm.get('customer');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.customersService.getCustomers().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Company) => x.name;
  inFormatter = (result: Company) => result.name;

  selectedItem($event) {
    console.log('Este es el evento seleccionado, aquí va el emiter, creo.');
    console.log($event);
    console.log('Este es el status del customer ', this.customerSearchForm.status);
    if (this.customerSearchForm.status === 'VALID') {
      this.sendStatusForm.emit(false);
    } else if (this.customerSearchForm.status === 'INVALID') {
      this.sendStatusForm.emit(true);
    }
  }

}
