import { Injectable } from '@angular/core';
import {Alert} from '../../models/alerts/alert.model';

@Injectable()
export class MessagesService {

  public alerts: Alert[];

  private TITLE_SUCCESS = 'Éxito';
  private TITLE_DANGER = 'Error';

  constructor() {
    this.alerts = [];
  }

  success(message: string): void {
    const alert = new Alert(this.TITLE_SUCCESS, message, 'success', 'far fa-check-circle');
    this.alerts.push(alert);

    setTimeout(() => this.onClosed(alert), 5000);
  }

  danger(message: string): void {
    const alert = new Alert(this.TITLE_DANGER, message, 'danger', 'fas fa-exclamation-triangle');
    this.alerts.push(alert);

    setTimeout(() => this.onClosed(alert), 5000);
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
