import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CompanyService} from '../../../../services/company/company.service';
import {Company} from '../../../../models/company/company.model';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {

  public companies$: Observable<Company[]>;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companies$ = this.companyService.getCompanies();
  }

}
