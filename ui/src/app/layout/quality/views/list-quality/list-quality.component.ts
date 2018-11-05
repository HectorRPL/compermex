import { Component, OnInit } from '@angular/core';
import {QualityService} from '../../service/quality.service';
import {Quality} from '../../models/quality.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list-quality',
  templateUrl: './list-quality.component.html',
  styleUrls: ['./list-quality.component.css']
})
export class ListQualityComponent implements OnInit {

  qualities$: Observable<Quality[]>;

  constructor(private qualityService: QualityService) {
  }

  ngOnInit() {
    this.qualities$ = this.qualityService.getQuality();

  }

}
