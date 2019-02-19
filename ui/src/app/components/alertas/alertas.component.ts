import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/message/messages.service";
import {Alert} from "../../models/alerts/alert.model";

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  constructor(public messageServ: MessagesService) { }

  ngOnInit() {
  }

  close(alert: Alert){
    this.messageServ.close(alert);
  }

}
