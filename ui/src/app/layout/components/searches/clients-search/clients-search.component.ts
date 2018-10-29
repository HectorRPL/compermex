import {Component} from '@angular/core';
import {ClientService} from '../../../../services/client/client.service';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Company} from '../../../../models/company/company.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clients-search',
  templateUrl: './clients-search.component.html',
  styleUrls: ['./clients-search.component.css']
})
export class ClientsSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private clientService: ClientService,
              private modalService: NgbModal) {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.clientService.getClients().pipe(
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
    console.log($event);
  }

}
