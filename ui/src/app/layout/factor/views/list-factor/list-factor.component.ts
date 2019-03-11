import { Component, OnInit } from '@angular/core';
import {Factor} from '../../../../models/factor/factor.model';
import {Observable} from 'rxjs/Rx';
import {FactorPageService} from '../../../../services/factor/factor-page.service';

@Component({
  selector: 'app-list-factor',
  templateUrl: './list-factor.component.html',
  styleUrls: ['./list-factor.component.css']
})
export class ListFactorComponent {

  factors$: Observable<Factor[]>;
  total$: Observable<number>;

  constructor(private service: FactorPageService) {
    this.factors$ = service.result$;
    this.total$ = service.total$;
  }
}
