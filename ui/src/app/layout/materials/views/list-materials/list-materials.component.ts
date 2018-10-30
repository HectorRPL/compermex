import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Material} from '../../models/material.model';
import {MaterialsService} from '../../service/materials.service';

@Component({
  selector: 'app-list-materials',
  templateUrl: './list-materials.component.html',
  styleUrls: ['./list-materials.component.css']
})
export class ListMaterialsComponent {

  materials$: Observable<Material[]>;

  constructor(private materialsService: MaterialsService) {
  }

  ngOnInit() {
    this.materials$ = this.materialsService.getMaterials();
  }

}
