export class Alert {
  title: string;
  msg: string;
  type: string;
  icon: string;

  staticAlertClosed: boolean;

  constructor(title: string, msg: string, type: string, icon: string) {
    this.title = title;
    this.msg = msg;
    this.type = type;
    this.icon = icon;

    this.staticAlertClosed = false;
  }
}
