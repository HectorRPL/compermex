import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Paperboard} from '../../../../models/paperboard/paperboard.model';
import {PaperboardPageService} from '../../../../services/paperboard/paperboard-page.service';

@Component({
  selector: 'app-list-paperboard',
  templateUrl: './list-paperboard.component.html',
  styleUrls: ['./list-paperboard.component.css']
})
export class ListPaperboardComponent {

  paperboards$: Observable<Paperboard[]>;
  total$: Observable<number>;

  constructor(public service: PaperboardPageService) {
    this.paperboards$ = service.result$;
    this.total$ = service.total$;
  }
}
