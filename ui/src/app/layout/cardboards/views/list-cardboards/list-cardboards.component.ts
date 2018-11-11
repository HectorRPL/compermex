import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Cardboard} from '../../../../models/cardboard/cardboard.model';
import {CardboardsService} from '../../service/cardboards.service';

@Component({
  selector: 'app-list-cardboards',
  templateUrl: './list-cardboards.component.html',
  styleUrls: ['./list-cardboards.component.css']
})
export class ListCardboardsComponent implements OnInit {

  cardboards$: Observable<Cardboard[]>;

  constructor(private cardboardsService: CardboardsService) {
  }

  ngOnInit() {
    this.cardboards$ = this.cardboardsService.searchPaperboard('searchPaperboard');
  }

}
