import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MaterialsService} from "../../../../services/materials/materials.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Rx";
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs/internal/operators";
import {of} from "rxjs/index";
import {Color} from "../../../../models/material/color.model";
import {NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-material-colors-search',
  templateUrl: './material-colors-search.component.html',
  styleUrls: ['./material-colors-search.component.css']
})
export class MaterialColorsSearchComponent implements OnInit {

  @Input() public color: Color;
  @Input() public parentFormGroup: FormControl;

  @Output() public update = new EventEmitter();

  public model: any;
  public searching = false;
  public searchFailed = false;

  constructor(private materialsService: MaterialsService) {

  }

  ngOnInit() {

  }

  get _color() {
    return this.parentFormGroup.get('color');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.materialsService.searchColors(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
  );

  resFormatter = (x: Color) => x.description;
  inFormatter = (result: Color) => result.description;

  selectedItem(event): void {
    console.log('Selected item: ', event);

    this.color = event.item;
    this.update.emit(this.color);
  }

  fn_blur(): void {
    this.searching = false;
  }
}
