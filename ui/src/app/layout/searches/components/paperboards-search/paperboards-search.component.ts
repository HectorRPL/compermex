import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {CardboardsService} from "../../../../services/cardboards/cardboards.service";
import {Paperboard} from "../../../../models/paperboard/paperboard.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaperboardService} from '../../../../services/paperboard/paperboard.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-paperboards-search',
  templateUrl: './paperboards-search.component.html',
  styleUrls: ['./paperboards-search.component.css']
})
export class PaperboardsSearchComponent {

  @Output() public sendStatusForm = new EventEmitter();
  public paperboardsSearchForm: FormGroup;
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private paperboardServ: PaperboardService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createPaperboardsSearchForm();
  }

  createPaperboardsSearchForm() {
    this.paperboardsSearchForm = this.formBuilder.group({
      'paperboard': new FormControl('', [
        Validators.required
      ]),
    });
  }

  get paperboard() {
    return this.paperboardsSearchForm.get('paperboard');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.paperboardServ.get(this.buildHttParams(term))
          .pipe(
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

  selectedItem(event) {
    if (this.paperboardsSearchForm.status === 'VALID') { // TODO => por nueva definición siempre manda el todo el obejto
      const value = {
        status: false,
        _id: event.item._id,
        response: event
      };
      this.sendStatusForm.emit(value);
    } else if (this.paperboardsSearchForm.status === 'INVALID') {
      const value = {
        status: true,
        _id: null,
        response: null
      };
      this.sendStatusForm.emit(value);

    }
  }

  buildHttParams(term: string) {
    return new HttpParams()
    .set('name', term);
  }

}
