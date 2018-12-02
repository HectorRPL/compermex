import {Component, EventEmitter, Output} from '@angular/core';
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/index';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MaterialsService} from '../../../../services/materials/materials.service';
import {MaterialsMaster} from "../../../materials/models/materials-master.model";

@Component({
  selector: 'app-boxes-search',
  templateUrl: './boxes-search.component.html',
  styleUrls: ['./boxes-search.component.css']
})
export class BoxesSearchComponent {

  @Output() public sendStatusForm = new EventEmitter();
  public boxSearchForm: FormGroup;
  public model: any;
  public searching = false;
  public searchFailed = false;

  constructor(private materialsService: MaterialsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createBoxSearchForm();
  }

  createBoxSearchForm() {
    this.boxSearchForm = this.formBuilder.group({
      'box': new FormControl('', [
        Validators.required
      ]),
    });
  }

  get box() {
    return this.boxSearchForm.get('box');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.materialsService.searchBoxes(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: MaterialsMaster) => x.description;
  inFormatter = (result: MaterialsMaster) => result.description;

  selectedItem(event) {
    if (this.boxSearchForm.status === 'VALID') {
      const value = {
        status: false,
        _id: event.item._id,
        boxSearchForm: event
      };
      this.sendStatusForm.emit(value);
    } else if (this.boxSearchForm.status === 'INVALID') {
      const value = {
        status: true,
        _id: null,
        boxSearchForm: null
      };
      this.sendStatusForm.emit(value);

    }
  }

}
