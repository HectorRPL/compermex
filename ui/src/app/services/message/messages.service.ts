import { Injectable } from '@angular/core';
import {Alert} from '../../models/alerts/alert.model';


@Injectable()
export class MessagesService {

  public alerts: Alert[];
  constructor() {
    this.alerts = [];
  }

  add(alert: Alert) {
    this.alerts.push(alert);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  clear(){
    this.alerts = [];
  }


}
