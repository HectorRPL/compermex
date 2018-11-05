import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../../service/reception.service';
import {Reception} from '../../models/reception.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list-reception',
  templateUrl: './list-reception.component.html',
  styleUrls: ['./list-reception.component.css']
})
export class ListReceptionComponent implements OnInit {

  receptions$: Observable<Reception[]>;

  constructor(private receptionService: ReceptionService) {
  }

  ngOnInit() {
    this.receptions$ = this.receptionService.getReceptions();

  }

}
