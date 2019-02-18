export class Alert {
  type: string;
  message: string;
  icon?: string;

  constructor(type: string, message: string, icon: string) {
    this.type = type;
    this.message = message;
    this.icon = icon;
  }
}
