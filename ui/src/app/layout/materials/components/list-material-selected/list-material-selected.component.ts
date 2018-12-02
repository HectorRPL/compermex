import {Component, OnInit} from '@angular/core';
import {MaterialsService} from "../../../../services/materials/materials.service";
import {Material} from "../../models/material.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-list-material-selected',
  templateUrl: './list-material-selected.component.html',
  styleUrls: ['./list-material-selected.component.css']
})
export class ListMaterialSelectedComponent implements OnInit {

  materials$: Observable<Material[]>;

  constructor(private materialsService: MaterialsService) {
  }

  ngOnInit() {
    this.materials$ = this.materialsService.getMaterials();
  }

}
