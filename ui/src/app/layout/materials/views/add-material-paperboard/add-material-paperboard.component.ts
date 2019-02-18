import { Component, OnInit } from '@angular/core';
import {Paperboard} from "../../../../models/paperboard/paperboard.model";
import {PaperboardService} from "../../../../services/paperboard/paperboard.service";
import {Alert} from "../../../../models/alerts/alert.model";

@Component({
  selector: 'app-add-material-paperboard',
  templateUrl: './add-material-paperboard.component.html',
  styleUrls: ['./add-material-paperboard.component.css']
})
export class AddMaterialPaperboardComponent implements OnInit {

  public paperboard: Paperboard;
  public alerts: Alert[];

  constructor(private paperboardService: PaperboardService) {
    this.paperboard = new Paperboard();
    this.alerts = [];
  }

  ngOnInit() {
  }

  fn_saveOrUpdate(paperboard: Paperboard): void {
    this.paperboardService.add(paperboard).subscribe(result => {
      console.log('Entity response: ', result);

      if (result !== null) {
        this.paperboard = result;
        this.alerts.push(new Alert('success', 'Los cambios han sido guardados correctamente. ID: ' + this.paperboard._id.$oid));
      } else {
        this.alerts.push(new Alert('danger', 'No es posible guardar cambios'));
      }
    });
  }
}
