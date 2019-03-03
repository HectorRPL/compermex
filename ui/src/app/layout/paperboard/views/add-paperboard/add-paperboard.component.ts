import {Component, OnInit} from "@angular/core";
import {Paperboard} from "../../../../models/paperboard/paperboard.model";
import {PaperboardService} from "../../../../services/paperboard/paperboard.service";
import {MessagesService} from "../../../../services/message/messages.service";
import {Alert} from "../../../../models/alerts/alert.model";

@Component({
  selector: 'app-add-cardboard',
  templateUrl: './add-paperboard.component.html',
  styleUrls: ['./add-paperboard.component.css']
})
export class AddPaperboardComponent implements OnInit {

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
        this.messagesService.success('Los cambios han sido guardados correctamente. ID: ' + this.paperboard._id.$oid);
      }
    });
  }
}
