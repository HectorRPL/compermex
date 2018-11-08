import {Component, EventEmitter, Output} from '@angular/core';
import {CardboardService} from '../../../../services/cardboard/cardboard.service';
import {Observable, of} from 'rxjs/index';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Paperboard} from '../../../../models/paperboard/paperboard.model';

@Component({
  selector: 'app-cardboard-search',
  templateUrl: './cardboard-search.component.html',
  styleUrls: ['./cardboard-search.component.css']
})
export class CardboardSearchComponent {

  @Output() public hijoDisparaEvento = new EventEmitter();


  public model: any;
  public searching = false;
  public searchFailed = false;

  constructor(private cardboardService: CardboardService) {

  }

  emiterDePrueba() {
    this.hijoDisparaEvento.emit('le mandas parametro para que el papá los cache');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.cardboardService.getCardboards().pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Paperboard) => x.description;
  inFormatter = (result: Paperboard) => result.description;

  selectedItem($event) {
    console.log($event);
  }

}
