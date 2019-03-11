import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoxType} from '../../../../models/box/box-type';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {BoxesService} from '../../../../services/boxes/boxes.service';

@Component({
  selector: 'app-box-type-select',
  templateUrl: './box-type-select.component.html',
  styleUrls: ['./box-type-select.component.css']
})
export class BoxTypeSelectComponent implements OnInit {

  @Input() public boxType: BoxType;
  @Input() public parentFormGroup: FormControl;

  @Output() public update = new EventEmitter();

  public $boxesTypes: Observable<BoxType[]>;

  constructor(private boxesService: BoxesService) {
    this.boxType = new BoxType();
  }

  ngOnInit() {
    this.$boxesTypes = this.boxesService.getTypes();
  }

  get _boxType() {
    return this.parentFormGroup.get('boxType');
  }

  fn_update(boxType: BoxType): void {
    this.update.emit(this.boxType);
  }
}
