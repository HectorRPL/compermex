import {Component, OnInit} from '@angular/core';
import {ProductionService} from "../../../../services/production/production.service";
import {Observable} from "rxjs/Observable";
import {Production} from "../../models/production.model";

@Component({
  selector: 'app-list-production',
  templateUrl: './list-production.component.html',
  styleUrls: ['./list-production.component.css']
})
export class ListProductionComponent implements OnInit {

  productions$: Observable<Production[]>;

  constructor(private productionServ: ProductionService) {
  }

  ngOnInit() {
    this.productions$ = this.productionServ.getProduction();

  }

}
