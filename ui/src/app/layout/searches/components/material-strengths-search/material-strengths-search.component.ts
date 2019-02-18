import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Strength} from "../../../../models/material/strengths.model";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Rx";
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs/internal/operators";
import {of} from "rxjs/index";
import {MaterialsService} from "../../../../services/materials/materials.service";

@Component({
  selector: 'app-material-strengths-search',
  templateUrl: './material-strengths-search.component.html',
  styleUrls: ['./material-strengths-search.component.css']
})
export class MaterialStrengthsSearchComponent implements OnInit {

  @Input() public strength: Strength;
  @Input() public parentFormGroup: FormControl;

  @Output() public update = new EventEmitter();

  public model: any;
  public searching = false;
  public searchFailed = false;

  constructor(private materialsService: MaterialsService) {
    this.strength = new Strength();
  }

  ngOnInit() {

  }

  get _strength() {
    return this.parentFormGroup.get('strength');
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.materialsService.searchStrengths(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );

  resFormatter = (x: Strength) => x.description;
  inFormatter = (result: Strength) => result.description;

  selectedItem(event) {
    console.log('Selected item: ', event);

    this.strength = event.item;
    this.update.emit(this.strength);
  }

  fn_blur(): void {
    this.searching = false;
  }
}
