import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MaterialType} from "../../../../models/material/type.model";
import {FormControl} from "@angular/forms";
import {MaterialsService} from "../../../../services/materials/materials.service";
import {Observable} from "rxjs/Rx";
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs/internal/operators";
import {of} from "rxjs/index";

@Component({
  selector: 'app-material-types-search',
  templateUrl: './material-types-search.component.html',
  styleUrls: ['./material-types-search.component.css']
})
export class MaterialTypesSearchComponent implements OnInit {

  @Input() public type: MaterialType;
  @Input() public parentFormGroup: FormControl;

  @Output() public update = new EventEmitter();

  public model: any;
  public searching = false;
  public searchFailed = false;

  constructor(private materialsService: MaterialsService) {
    this.type = new MaterialType();
  }

  ngOnInit() {

  }

  get _type() {
    return this.parentFormGroup.get('type');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.materialsService.searchTypes(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: MaterialType) => x.description;
  inFormatter = (result: MaterialType) => result.description;

  selectedItem(event) {
    console.log('Selected item: ', event);

    this.type = event.item;
    this.update.emit(this.type);
  }

  fn_blur(): void {
    this.searching = false;
  }
}
