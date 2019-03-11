import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoxTypeSelectComponent} from './box-type-select/box-type-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BoxTypeSelectComponent
  ],
  exports: [
    BoxTypeSelectComponent
  ]
})
export class SelectorsModule { }
