import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {CardboardsService} from "../../../cardboards/service/cardboards.service";
import {Paperboard} from "../../../../models/paperboard/paperboard.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor(private cardboardsService: CardboardsService,
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
        this.cardboardsService.searchPaperboard(term.toUpperCase()).pipe(
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
    console.log(event);
    if (this.paperboardsSearchForm.status === 'VALID') {
      const value = {
        status: false,
        _id: event.item._id
      };
      this.sendStatusForm.emit(value);
    } else if (this.paperboardsSearchForm.status === 'INVALID') {
      const value = {
        status: true,
        _id: null
      };
      this.sendStatusForm.emit(value);

    }
  }

}
