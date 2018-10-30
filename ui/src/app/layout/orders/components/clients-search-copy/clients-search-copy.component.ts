import {Component} from '@angular/core';
import {ClientService} from '../../../../services/client/client.service';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Company} from '../../../../models/company/company.model';
import {Observable, of} from 'rxjs/index';

@Component({
  selector: 'app-clients-search-copy',
  templateUrl: './clients-search-copy.component.html',
  styleUrls: ['./clients-search-copy.component.css']
})
export class ClientsSearchCopyComponent {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private clientService: ClientService) {
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
