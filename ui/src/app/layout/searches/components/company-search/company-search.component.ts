import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {CompanyService} from '../../../../services/company/company.service';
import {Company} from '../../../../models/company/company.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {

  @Output() public sendStatusForm = new EventEmitter();
  public companySearchForm: FormGroup;
  public companies$: Observable<Company[]>;

  constructor(private companyService: CompanyService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.companies$ = this.companyService.getCompanies();
    this.createCompanySearchForm();
  }

  createCompanySearchForm() {
    this.companySearchForm = this.formBuilder.group({
      'company': new FormControl('', [
        Validators.required
      ]),
    });
  }

  get company() {
    return this.companySearchForm.get('company');
  }

  onChangeSelectCompany(event) {

    if (this.companySearchForm.status === 'VALID') {
      const value = {
        status: false,
        _id: event._id.$oid
      };
      this.sendStatusForm.emit(value);
    } else if (this.companySearchForm.status === 'INVALID') {
      const value = {
        status: true,
        _id: null
      };
      this.sendStatusForm.emit(value);
    }

  }

}
