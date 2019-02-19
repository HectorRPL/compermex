import { Component, OnInit } from '@angular/core';
import {Paperboard} from "../../../../models/paperboard/paperboard.model";
import {PaperboardService} from "../../../../services/paperboard/paperboard.service";
import {Alert} from "../../../../models/alerts/alert.model";
import {MessagesService} from "../../../../services/message/messages.service";

@Component({
  selector: 'app-add-material-paperboard',
  templateUrl: './add-material-paperboard.component.html',
  styleUrls: ['./add-material-paperboard.component.css']
})
export class AddMaterialPaperboardComponent implements OnInit {

  public paperboard: Paperboard;

  constructor(private paperboardService: PaperboardService,
              private messagesService: MessagesService) {
    this.paperboard = new Paperboard();
  }

  ngOnInit() {
  }

  fn_saveOrUpdate(paperboard: Paperboard): void {
    this.paperboardService.add(paperboard).subscribe(result => {
      console.log('Entity response: ', result);

      if (result !== null) {
        this.paperboard = result;
        this.messagesService.add(new Alert('success',
          'Los cambios han sido guardados correctamente. ID: ' + this.paperboard._id.$oid, ''));
      }
    });
  }
}
