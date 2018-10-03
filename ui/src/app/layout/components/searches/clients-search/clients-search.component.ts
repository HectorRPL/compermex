import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../../../services/client/client.service";
import {Observable, of} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs/operators";
import {Company} from "../../../../models/company/company.model";

@Component({
  selector: 'app-clients-search',
  templateUrl: './clients-search.component.html',
  styleUrls: ['./clients-search.component.css']
})
export class ClientsSearchComponent {

  model: any;
  searching = false;
  searchFailed1 = false;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.clientService.getClients().pipe(
          tap(() => this.searchFailed1 = false),
          catchError(() => {
            this.searchFailed1 = true;
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
